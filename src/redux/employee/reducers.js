import {
  CREATE_EMPLOYEE,
  LIST_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "./types";

const initialState = [];

function employeeReducer(employees = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EMPLOYEE:
      return [...employees, payload];

    case LIST_EMPLOYEES:
      return payload;

    case UPDATE_EMPLOYEE:
      return employees.map((employee) => {
        if (employee.id === payload.id) {
          return {
            ...employee,
            ...payload,
          };
        } else {
          return employee;
        }
      });

    case DELETE_EMPLOYEE:
      return employees.filter(({ id }) => id !== payload.id);

    default:
      return employees;
  }
}

export default employeeReducer;
