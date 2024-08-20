import api from "../api";

const User = {
  login: async (user) => {
    try {
      const response = await api.post("/login", user);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error durante el login:", error);

      // Puedes devolver una estructura de error o manejarlo de otra forma
      return {
        success: false,
        error: error.response ? error.response.data : "Error desconocido",
      };
    }
  },
};

export default User;
