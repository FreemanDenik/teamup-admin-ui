import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignInPage, SignUpPage } from "./pages/SignPage";
import Home from "./pages/Home";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
