import axios from "axios";
import { string } from "prop-types";

export const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
