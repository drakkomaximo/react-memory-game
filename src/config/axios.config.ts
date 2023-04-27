import axios from 'axios';
import { getApiConfig } from '.';

export const AxiosInstance = axios.create({
  baseURL: getApiConfig().API_ENDPOINT,
});
