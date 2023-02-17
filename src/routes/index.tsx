import { Routes, Route, Navigate } from "react-router-dom";
import Advert from "../pages/Advert";
import Home from "../pages/Home";

const Routers = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/advert" element={<Advert />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);

export default Routers;
