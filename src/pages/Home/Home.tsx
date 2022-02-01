import React, { FC } from "react";
import LayoutContainer from "./sections/LayoutContainer";
import Header from "./sections/Header";
import StartScreen from "./sections/StartScreen";
import WhatDoWant from "./sections/WhatDoWant";
import HowWorks from "./sections/HowWorks";
import UpcomingEvents from "./sections/UpcomingEvents";
import Stats from "./sections/Stats";
import Organizators from "./sections/Organizators";
import Footer from "./sections/Footer";

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
