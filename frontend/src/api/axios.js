import axios from "axios";
import { userApiUrl } from "./config";

const axiosInstance = axios.create({
  baseURL: userApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
