import React from "react";
import "../../App.css";
import ImageSlider from "../../components/SliderImges/ImageSlider";
//import Cards from '../Cards';

import ChooseUs from "../../components/Choose-us/ChooseUs";
import Features from "../../components/Feature-section/Features";

import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Courses-section/Courses";
import Cards from "../../components/Card/Cards";
import "./Home.css";

function Home() {
  return (
    <>
      <ImageSlider/>
      <ChooseUs />
      <Cards />
      <Services />
      <Features />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default Home;
