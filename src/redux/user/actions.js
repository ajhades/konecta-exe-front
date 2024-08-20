import { jwtDecode } from "jwt-decode";
import { LOGIN_USER, LOGIN_FAILURE, LOGOUT_USER } from "./types";

import User from "../../services/userService";

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await User.login(user);
    if (res.success) {
      const token = res.data.token;
      const user = jwtDecode(token);
      console.log("user", user);
      dispatch({ type: LOGIN_USER, payload: user });
      return Promise.resolve(res.data);
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: res.error });
      return Promise.resolve(res.error);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
