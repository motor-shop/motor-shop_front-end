import { Routes, Route, Navigate } from "react-router-dom";

import Advert from "../pages/Advert";
import AllAdverts from "../pages/AllAdverts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/advert/:advertId" element={<Advert />} />
    <Route path="/allAdverts" element={<AllAdverts />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);

export default Routers;
