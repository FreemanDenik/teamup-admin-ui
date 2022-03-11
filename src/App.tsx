import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";

import Layout from "./components/Layout";
import Home from "./pages/Home";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SignInPage, SignUpPage} from "./pages/SignPage";
import PeoplePage from "./pages/People/PeoplePage";
import EventsList from "./pages/EventsList";

const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>

      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path="/people" element = {<PeoplePage />} />
          <Route path="events" element={<EventsList/>}/>
        </Route>
        <Route path = "/sign-up" element = {<SignUpPage/>} />
        <Route path = "/sign-in" element = {<SignInPage/>} />
      </Routes>
    </AnimatePresence>
  );
  };

export default App;
