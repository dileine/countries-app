import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country/:name' />
    </Routes>
  );
};

export default AppRoutes;
