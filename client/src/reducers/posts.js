const initialPostsState = {
  posts: [],
  isFetching: false,
  isCreatingPost: false,
};

const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case "TOGGLE_FETCH_LOADING":
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    case "TOGGLE_CREATE_POST_LOADING":
      return {
        ...state,
        isCreatingPost: !state.isCreatingPost,
      };
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default posts;
