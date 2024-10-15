import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CountryDetailsPage from "../pages/CountryDetailsPage/CountryDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country/:name' element={<CountryDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
