import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const postsResponse = await api.fetchPosts();
    const data = postsResponse.data;
    dispatch({type: "FETCH_POSTS", payload: data})
  } catch (error) {
      console.log(error)
  }
};
