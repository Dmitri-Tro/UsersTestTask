import axios, { AxiosError } from 'axios';

export const axiosInstance = axios.create( { baseURL: 'https://jsonplaceholder.typicode.com' } );

axiosInstance.interceptors.request.use(
  async ( config ) => {
    return Promise.resolve( config );
  },
  ( error: AxiosError ) => {
    throw error;
  },
);

axiosInstance.interceptors.response.use(
  ( res ) => {
    return res.data;
  },
  async ( error: AxiosError ) => {
    throw error;
  },
);
