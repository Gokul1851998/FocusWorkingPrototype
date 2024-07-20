import axios from "axios";
import { SECURITY_URL } from "../config.js";
import { securityApi } from "../axios.js";

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
        resolve(securityApi(originalRequest));
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
    const response = await axios.get(`${SECURITY_URL}/token/regeneratetokens?refreshToken=${refreshTokenValue}`);

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
securityApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

securityApi.interceptors.response.use(
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
          securityApi.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
          processQueue(null, newToken);
          originalRequest._retry = true;
          originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
          return securityApi(originalRequest);
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
          resolve(securityApi(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  }
);










import { useAlert } from "../components/AlertHandler/AlertContext.jsx";

// Custom hook for API requests
const securityApis = () => {
  const { showAlert } = useAlert();


  const handleError = (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400: // Bad request
          const result = error.response.data.result ? JSON.parse(error.response.data.result) : null;
          if (result && Array.isArray(result) && result[0]?.ErrorMessage) {
            showAlert('warning', result[0].ErrorMessage);
          } else {
            showAlert('warning', error.response.data.message);
          }
          break;
        case 401: // Unauthorized
          showAlert('warning', error.response.data.message);
          break;
        case 403: // Forbidden
          showAlert('warning', error.response.data.message);
          break;
        case 404: // Not Found
          showAlert('warning', error.response.data.message);
          break;
        case 409: // Conflict
          showAlert('warning', error.response.data.message);
          break;
        case 500: // Internal Server Error
          console.error('A 500 Internal Server Error occurred.');
          break;
        default:
          console.error(`An error occurred: ${error.response.status}`);
          break;
      }
    } else {
      console.error('An error occurred:', error.message);
    }
  };

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
              response= await securityApi.get(url,{ headers, params });
      }
      else{        
       response = await securityApi({
        method: method,
        url: url,
        data: params,
        headers: headers
      });
     }
  
      return response;
    } catch (error) {
      console.error(`Error in ${url}`, error);

      handleError(error);
      throw error;
    }
  };

  const loginGetCompany = async (userName) => {
    try {
      const response = await axios.get(`${SECURITY_URL}/login/getcompany?userName=${userName}`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  const loginLogin = async (payload) => {
    try {
      const response = await axios.post(`${SECURITY_URL}/login/login`, payload);
      return response;
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  const getProfileSummary = async (payload) => {
  
    try {
      const response = await makeAuthorizedRequest("get","/profile/getprofilesummary",payload);
     
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  



  return {
   
    loginGetCompany,
    loginLogin,
    getProfileSummary
   
  };
};

export {

  securityApis,
};

