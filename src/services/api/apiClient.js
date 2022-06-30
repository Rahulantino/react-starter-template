import axios from "axios";

export const baseURL = `https://jsonplaceholder.typicode.com/`;

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 300000,
  headers: {},
});

apiClient.interceptors.request.use((config) => {
  return config;
});

export { apiClient };
