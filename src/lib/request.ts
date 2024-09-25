import axios from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";
// import store from "@/store/store";
import { setIsAuth } from "@/store/slice";

const store = await import("@/store/store");
const dispatch = store.useAppDispatch();

const API_URL = "https://back.boson-higgs.link/api/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: any) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        originalRequest._retry = true;
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosApi.post("/authorize/refresh-token", {
          accessToken,
          refreshToken,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        return axiosApi.request(originalRequest);
      } catch (error: any) {
        dispatch(setIsAuth(false));
        localStorage.clear();
        window.history.replaceState("", "", "/");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    { status?: number; data: any }
  > =>
  async ({ url, method, data, params, headers }: any) => {
    try {
      const result = await axiosApi({
        url: API_URL + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosApi;
