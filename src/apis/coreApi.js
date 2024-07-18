import axios from "axios";
import { CORE_URL } from "../config.js";
import { api } from "../axios.js";

let isRefreshing = false;
let failedQueue = [];



const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};
const addRequestToQueue = (originalRequest) => {
  return new Promise((resolve, reject) => {
    failedQueue.push({
      resolve: (token) => {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        resolve(api(originalRequest));
      },
      reject: (err) => {
        reject(err);
      }
    });
  });
};

// Function to refresh the access token
const refreshToken = async () => {
  try {
    const refreshTokenValue = localStorage.getItem("refreshToken");
    
    
    const payload = { refershToken: refreshTokenValue };
    const response = await axios.get(`${CORE_URL}/token/regeneratetokens?refershToken=${refreshTokenValue}`);

    const { accessToken, refreshToken } = response?.data;

    // Update the local storage with the new tokens
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return accessToken;
  } catch (error) {
    console.error("refresh token error", error);

    // Clear tokens from local storage in case of an error
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");

    throw error;
  }
};

// Interceptor for API requests
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newToken = await refreshToken();
          isRefreshing = false;
          api.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
          processQueue(null, newToken);
          originalRequest._retry = true;
          originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          window.location.href = '/';
          return Promise.reject(refreshError);
        }
      }
      else {
        return addRequestToQueue(originalRequest).catch(err => {
          return Promise.reject(err);
        });
      } 
      // If a refresh is already in progress, we'll return a promise that resolves with the new token
      return new Promise((resolve, reject) => {
        failedQueue.push((token) => {
          originalRequest._retry = true;
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          resolve(api(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  }
);

const makeAuthorizedRequest = async (method, url, params) => {
  const token = localStorage.getItem("accessToken");
  const headers = {
    "Authorization": `Bearer ${token}`
  };

  // When dealing with FormData, let Axios handle the Content-Type
  if (params instanceof FormData) {
    
    headers['Content-Type'] = "multipart/form-data"; // This ensures Axios sets the correct type
  } else {
    headers['Content-Type'] = "application/json";
  }

  try {
    let response;
    if(method === "get"){
            response= await api.get(url,{ headers, params });
    }
    else{        
     response = await api({
      method: method,
      url: url,
      data: params,
      headers: headers
    });
   }

    return response;
  } catch (error) {
    console.error(`Error in ${url}`, error);
    throw error;
  }
};

//Get getlanguagelist - Navbar
export const Navbar_getlanguagelist =async()=>{
 
    return makeAuthorizedRequest("get","/language/getlanguagelist");
}