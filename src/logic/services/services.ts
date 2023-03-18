import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axiosInterceptor';

const getWetherData = async (
  query: string
): Promise<AxiosResponse<any, any> | undefined> => {
  const res = await axiosInstance.get(query);
  return res?.data;
};

const getForecastData = async (
  query: string
): Promise<AxiosResponse<any, any> | undefined> => {
  const res = await axiosInstance.get(query);
  return res?.data;
};

export const services = {
  getWetherData,
  getForecastData,
};
