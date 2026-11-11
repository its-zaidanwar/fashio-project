import axios from "axios";
import store from "../app/store";
import { setCredentials, logout } from "../features/auth/state/authSlice";

export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});


api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// 401 aaye to: refresh -> wahi request dobara
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const res = await axios.post("/api/auth/refresh");
        store.dispatch(setCredentials(res.data.data)); // { user, accessToken }

        error.config.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
        return axios(error.config); // plain axios: retry pe interceptor dobara nahi chalega
      } catch {
        store.dispatch(logout()); // refresh bhi fail -> sab saaf
      }
    }
    return Promise.reject(error);
  },
);