import React, { FC, useEffect } from "react";
import classNames from "classnames";
import s from "./Home.module.scss";
import Header from "../../components/Header";
import LayoutContainer from "../../components/LayoutContainer";
import StartScreen from "../../components/StartScreen";
import UpcomingEvents from "../../components/UpcomingEvents";
import Stats from "../../components/Stats";
import HowWorks from "../../components/HowWorks";
import WhatDoWant from "../../components/WhatDoWant";
import Organizators from "../../components/Organizators";
import Footer from "../../components/Footer";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Header />
      <LayoutContainer>
        <StartScreen />
        <WhatDoWant />
        <HowWorks />
      </LayoutContainer>
      <UpcomingEvents />
      <LayoutContainer>
        <Stats />
        <Organizators />
        <Footer />
      </LayoutContainer>
    </main>
  );
};

export default Home;
