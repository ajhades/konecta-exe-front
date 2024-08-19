import api from "../api";

export const getAllEmployees = () => {
  return api.get("/employees");
};

export const getEmployee = (id) => {
  return api.get(`/employees/${id}`);
};

export const createEmployee = (data) => {
  return api.post("/employees", data);
};

export const updateEmployee = (id, data) => {
  return api.put(`/employees/${id}`, data);
};

export const deleteEmployee = (id) => {
  return api.delete(`/employees/${id}`);
};

export const findEmployeesByTitle = (title) => {
  return api.get(`/employees?title=${title}`);
};
