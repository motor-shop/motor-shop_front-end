import axios from "axios";

export const api = axios.create({
  baseURL: "https://motors-shop-1.onrender.com",
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
