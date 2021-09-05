import * as api from "../api";
import { toastMessage, TYPE_SUCCESS, TYPE_ERROR } from "../components/Toast";

const handleError = (error) => {
  let message = "";
  if (error.response) {
    message = error.response.data.message;
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  toastMessage(message.length ? message : "Something went wrong", TYPE_ERROR);
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_FETCH_LOADING" });
    const postsResponse = await api.fetchPosts();
    const data = postsResponse.data;
    dispatch({ type: "FETCH_POSTS", payload: data });
  } catch (error) {
    handleError(error);
  } finally {
    dispatch({ type: "TOGGLE_FETCH_LOADING" });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_CREATE_POST_LOADING" });
    const createPostResponse = await api.createPost(post);
    const data = createPostResponse.data;
    dispatch({ type: "CREATE_POST", payload: data });
    toastMessage("Post created!", TYPE_SUCCESS);
  } catch (error) {
    handleError(error);
  } finally {
    dispatch({ type: "TOGGLE_CREATE_POST_LOADING" });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_UPDATE_POST_LOADING" });
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE_POST", payload: data });
    toastMessage("Post details have been updated", TYPE_SUCCESS);
  } catch (error) {
    handleError(error);
  } finally {
    dispatch({ type: "TOGGLE_UPDATE_POST_LOADING" });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE_POST", payload: id });
    toastMessage("Post deleted", TYPE_SUCCESS);
  } catch (error) {
    handleError(error);
  }
};

export const likePost = (id, isLiked) => async (dispatch) => {
  try {
    const likePostResponse = await api.likePost(id, isLiked);
    const data = likePostResponse.data;
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    handleError(error);
  }
};
