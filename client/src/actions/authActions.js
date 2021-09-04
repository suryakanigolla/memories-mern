import * as api from "../api";
import { toastMessage, TYPE_SUCCESS, TYPE_ERROR } from "../components/Toast";

export const login = (loginData, history) => async (dispatch) => {
  try {
    const loginResponse = await api.login(loginData);
    if (loginResponse.status === 200) {
      const data = loginResponse.data;
      const token = data.token;
      delete data.token;

      dispatch({ type: "AUTH", payload: { userData: data, token } });
      toastMessage("Login Successful", TYPE_SUCCESS);

      history.push("/home");
    }
  } catch (error) {
    toastMessage(error.response.data.message, TYPE_ERROR);
  }
};
export const register = (registerData, history) => async (dispatch) => {
  try {
    const registerResponse = await api.register(registerData);
    if (registerResponse.status === 201) {
      const data = registerResponse.data;
      const token = data.token;
      delete data.token;

      dispatch({ type: "AUTH", payload: { userData: data, token } });
      toastMessage("Registration Successful", TYPE_SUCCESS);

      history.push("/home");
    }
  } catch (error) {
    toastMessage(error.response.data.message, TYPE_ERROR);
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
  toastMessage("Log out Successful", TYPE_SUCCESS);
};
