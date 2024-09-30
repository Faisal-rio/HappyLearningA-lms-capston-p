import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/" });

// Optional: Set token for authenticated requests (after login)
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default API;
