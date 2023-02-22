import { Routes, Route, Navigate } from "react-router-dom";
import Advert from "../pages/Advert";
import AllAdverts from "../pages/AllAdverts";
import Home from "../pages/Home";

const Routers = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/advert" element={<Advert />} />
    <Route path="/allAdverts" element={<AllAdverts />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);

export default Routers;
