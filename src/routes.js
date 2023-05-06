import React from "react";
import { Introduction, Home } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
