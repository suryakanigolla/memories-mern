const initialAuthState = {
  userData: null,
  token: null,
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem('user', JSON.stringify(action.payload.userData))
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear()
      return initialAuthState;
    default:
      return state;
  }
};

export default auth;
