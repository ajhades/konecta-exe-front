import { LOGIN_USER, LOGIN_FAILURE, LOGOUT_USER } from "./types";

/* const initialState = {
  error: null,
  user: null,
}; */
const initialState = [];

function userReducer(user = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return { ...user, ...payload.user };

    case LOGIN_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    case LOGOUT_USER:
      return [];

    default:
      return user;
  }
}

export default userReducer;
