import api from "../api";

const Employee = {
  getAllEmployees: async () => {
    return await api.get("/employees");
  },

  getEmployee: async (id) => {
    return await api.get(`/employees/${id}`);
  },

  createEmployee: async (data) => {
    return await api.post("/employees", data);
  },

  updateEmployee: async (id, data) => {
    return await api.put(`/employees/${id}`, data);
  },

  deleteEmployee: async (id) => {
    return await api.delete(`/employees/${id}`);
  },

  findEmployeesByTitle: async (title) => {
    return await api.get(`/employees?title=${title}`);
  },
};

export default Employee;
