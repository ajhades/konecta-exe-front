import { LOGIN_USER, LOGIN_FAILURE, LOGOUT_USER } from "./types";

const initialState = {
  error: null,
  user: null,
};

function userReducer(user = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return { ...user, user: payload.user };

    case LOGIN_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        user: null,
        error: null,
      };

    default:
      return user;
  }
}

export default userReducer;
