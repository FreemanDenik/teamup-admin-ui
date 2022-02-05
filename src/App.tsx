import React, { FC } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SignInPage, SignUpPage } from "./pages/SignPage";
import Home from "./pages/Home";
import { AnimatePresence, motion as m } from "framer-motion";
import "./App.scss";

const routesMap = {
  "/": Home,
  "sign-up": SignUpPage,
  "sign-in": SignInPage,
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes {...{ location, key: location.pathname }}>
          {Object.entries(routesMap).map(([path, Comp]) => {
            return <Route path={path} element={<Comp />} key={path} />;
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
