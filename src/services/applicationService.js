import api from "../api";

const Application = {
  getAllApplications: async () => {
    return await api.get("/applications");
  },

  getApplication: async (id) => {
    return await api.get(`/applications/${id}`);
  },

  createApplication: async (data) => {
    return await api.post("/applications", data);
  },

  updateApplication: async (id, data) => {
    return await api.put(`/applications/${id}`, data);
  },

  deleteApplication: async (id) => {
    return await api.delete(`/applications/${id}`);
  },

  findApplicationsByTitle: async (title) => {
    return await api.get(`/applications?title=${title}`);
  },
};

export default Application;
