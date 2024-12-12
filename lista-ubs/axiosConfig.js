import axios from "axios";

const api = axios.create({
  baseURL: "https://ubs-backend-pn16.onrender.com/api/ubs", // URL do backend
});

export default api;