import React from "react";
import Footer from "../Footer/Footer";
import Easy from "./EasyPurchase/Easy";
import Faqs from "./Faqs/Faqs";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import Works from "./Works/Works";

const AeroHome = () => {
  return (
    <>
      <Navigation />

      <Hero />

      <Features />

      <Easy />

      <Works />

      <Faqs />

      <Footer />
    </>
  );
};

export default AeroHome;
