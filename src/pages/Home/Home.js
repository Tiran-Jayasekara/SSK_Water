import React from "react";
import "../../App.css";
import HeroSection from "../../components/Hero-Section/HeroSection";
//import Cards from '../Cards';

import ChooseUs from "../../components/Choose-us/ChooseUs";
import Features from "../../components/Feature-section/Features";

import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Courses-section/Courses";
import Cards from "../../components/Card/Cards";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Services />
      <ChooseUs />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
