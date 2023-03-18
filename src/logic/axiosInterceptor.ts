import axios from 'axios';


const baseURL = 'https://api.openweathermap.org/data/2.5/';

//Custom instance defaults
export const axiosInstance = axios.create({
  baseURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (req: any) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async (req: any) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);


