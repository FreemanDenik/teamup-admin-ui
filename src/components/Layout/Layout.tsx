import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import LayoutContainer from '../LayoutContainer'

const Layout = () => (
  <LayoutContainer>
    <Header />
       <Outlet />
    <Footer/>
   </LayoutContainer>
);

export default Layout;