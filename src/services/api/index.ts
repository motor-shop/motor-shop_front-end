import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

export const config = () => {
  const token = localStorage.getItem("@motors-shop:Token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
