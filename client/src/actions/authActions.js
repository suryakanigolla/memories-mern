import * as api from "../api";

export const login = (loginData, history) => async (dispatch) => {
  try {
    const loginResponse = await api.login(loginData);
    const data = loginResponse.data;
    const token = data.token;
    delete data.token;

    dispatch({ type: "AUTH", payload: { userData: data, token } });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};
export const register = (registerData, history) => async (dispatch) => {
  try {
    const registerResponse = await api.register(registerData);
    const data = registerResponse.data;
    const token = data.token;
    delete data.token;

    dispatch({ type: "AUTH", payload: { userData: data, token } });
    history.push("/home");
  } catch (error) {}
};
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
