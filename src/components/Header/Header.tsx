import React, { FC } from "react";
import ButtonPanel from "./ButtonPanel";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import YourCity from "./YourCity";
import LayoutContainer from "../LayoutContainer";
import headerStyle from "./Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <LayoutContainer>
        <div className={headerStyle.inner}>
          <YourCity />
          <Link to='/'>
            <div className={headerStyle.logo}>TeamUp Group</div>
          </Link>
          <Nav />
          <ButtonPanel />
        </div>
      </LayoutContainer>
    </header>
  );
};

export default Header;
