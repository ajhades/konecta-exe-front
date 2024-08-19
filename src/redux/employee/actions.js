import {
  CREATE_EMPLOYEE,
  LIST_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./types";

import { getAllEmployees } from "../../services/employeeService";

export const listEmployees = () => async (dispatch) => {
  try {
    const res = await getAllEmployees();

    dispatch({
      type: LIST_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export default listEmployees;
