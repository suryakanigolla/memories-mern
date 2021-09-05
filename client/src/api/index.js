import axios from "axios";
import { store } from "../store";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000" });

const select = (state) => {
  return state.auth.token;
};

axiosInstance.interceptors.request.use((req) => {
  const token = select(store.getState());

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.status === 401) {
      store.dispatch({ type: "LOGOUT" });
    }
  }
);

export const fetchPosts = () => axiosInstance.get("/posts");
export const createPost = (postData) => axiosInstance.post("/posts", postData);
export const updatePost = (id, updatedPost) =>
  axiosInstance.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axiosInstance.delete(`/posts/${id}`);
export const likePost = (id, isLiked) =>
  axiosInstance.patch(`/posts/${id}/like`, { isLiked });

export const login = (loginData) =>
  axiosInstance.post("/auth/login", loginData);
export const register = (registerData) =>
  axiosInstance.post("/auth/register", registerData);
