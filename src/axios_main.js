import axios from "axios";
const Instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
export default Instance;
