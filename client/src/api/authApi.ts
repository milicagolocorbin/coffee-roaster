import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API,
});

const AuthAPI = {
  postToServer: function (data: any, route: string) {
    return axiosInstance.request({
      method: "POST",
      url: route,
      data,
      withCredentials: true,
    });
  },
  getFromServer: function (route: string) {
    return axiosInstance.request({
      method: "GET",
      url: route,
      withCredentials: true,
    });
  },
  patchToServer: function (data: any, route: any) {
    return axiosInstance.request({
      method: "PATCH",
      url: route,
      data,
      withCredentials: true,
    });
  },
  confirmPassword: function (data: any) {
    return axiosInstance.request({
      method: "PATCH",
      url: `/auth/confirm-password`,
      data,
      withCredentials: true,
    });
  },
};

export default AuthAPI;
