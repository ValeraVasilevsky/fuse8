import axios, { AxiosResponse, AxiosError } from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error as Error)
);
