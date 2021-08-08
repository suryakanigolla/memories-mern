import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({type: "TOGGLE_FETCH_LOADING"})
    const postsResponse = await api.fetchPosts();
    const data = postsResponse.data;
    dispatch({ type: "FETCH_POSTS", payload: data });
    dispatch({type: "TOGGLE_FETCH_LOADING"})
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({type: "TOGGLE_CREATE_POST_LOADING"})
    const createPostResponse = await api.createPost(post);
    const data = createPostResponse.data;
    dispatch({ type: "CREATE_POST", payload: data });
    dispatch({type: "TOGGLE_CREATE_POST_LOADING"})
  } catch (error) {
    console.log(error);
  }
};
