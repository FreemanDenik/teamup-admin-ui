import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";
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

let wasViewed = false;

const Home: FC<HomeProps> = ({}) => {
  useEffect(() => {
    wasViewed = !wasViewed;
    console.log(wasViewed);
  }, [wasViewed]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      exit={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
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
    </motion.main>
  );
};

export default Home;
