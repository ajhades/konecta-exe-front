import {
  CREATE_EMPLOYEE,
  LIST_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./types";

import Employee from "../../services/employeeService";

export const listEmployees = () => async (dispatch) => {
  try {
    const res = await Employee.getAllEmployees();

    dispatch({
      type: LIST_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const res = await Employee.createEmployee(employee);

    dispatch({
      type: CREATE_EMPLOYEE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateEmployee = (id, data) => async (dispatch) => {
  try {
    const res = await Employee.updateEmployee(id, data);

    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await Employee.deleteEmployee(id);

    dispatch({
      type: DELETE_EMPLOYEE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
