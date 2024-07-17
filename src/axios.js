import axios from 'axios';
import { BASE_URL, SECURITY_URL, loadConfig } from './config.js';

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const securityApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// A function to update the base URL of the axios instance
export const updateApiBaseUrl = (newBaseUrl) => {
  api.defaults.baseURL = newBaseUrl;
};

export const updateSecurityApiBaseUrl = (newBaseUrl) => {
  securityApi.defaults.baseURL = newBaseUrl;
};

// Use these functions after your config has been loaded
loadConfig().then(() => {
  updateApiBaseUrl(BASE_URL);
  updateSecurityApiBaseUrl(SECURITY_URL);
});

export { api, securityApi };
