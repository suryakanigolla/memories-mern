import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000" });

axiosInstance.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (user && token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req
});

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
