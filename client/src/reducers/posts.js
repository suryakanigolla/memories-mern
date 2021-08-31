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
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload)
      }
    default:
      return state;
  }
};

export default posts;
