import axios from "axios";
import { adminApiUrl } from "./config";

const adminInstance = axios.create({
  baseURL: adminApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default adminInstance;
