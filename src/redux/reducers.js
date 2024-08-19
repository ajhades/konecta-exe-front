import { combineReducers } from "redux";
import employeeReducer from "./employee/reducers";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  employees: employeeReducer,
});

export default rootReducer;
