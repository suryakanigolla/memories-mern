const initialAuthState = {
  userData: null,
  token: null,
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
      };
    case "LOGOUT":
      return initialAuthState;
    default:
      return state;
  }
};

export default auth;
