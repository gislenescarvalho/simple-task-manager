import axios from "axios";

const createAxiosInstance = (baseURL, headers = {}) => {
  const instance = axios.create({
    baseURL,
    headers
  });

  instance.interceptors.request.use(
    (config) => {
      // Modify config before request is sent
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Process response data
      return response;
    },
    (error) => {
      // Handle response error
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;