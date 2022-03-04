import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";

import Layout from "./components/Layout";
import Home from "./pages/Home";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SignInPage, SignUpPage} from "./pages/SignPage";
import People from "./pages/People/People";

// import Home from "./pages/Home";
// import "./App.scss";
//
// const routesMap = {
//   "/": Home,
//   "sign-up": SignUpPage,
//   "sign-in": SignInPage,
//   };

const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>

      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path="/people" element = {<People />} />
        </Route>
        <Route path = "/sign-up" element = {<SignUpPage/>} />
        <Route path = "/sign-in" element = {<SignInPage/>} />
      </Routes>
    </AnimatePresence>
  );

  // const location = useLocation();
  //
  // return (
  //   <>
  //     <AnimatePresence exitBeforeEnter>
  //       <Routes {...{ location, key: location.pathname }}>
  //         {Object.entries(routesMap).map(([path, Comp]) => {
  //           return <Route path={path} element={<Comp />} key={path} />;
  //         })}
  //         <Route path="*" element={<Navigate to="/" />} />
  //       </Routes>
  //     </AnimatePresence>
  //   </>
  // );
};

export default App;
