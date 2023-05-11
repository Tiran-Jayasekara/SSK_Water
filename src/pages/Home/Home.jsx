import React, { Fragment } from "react";
import HeroSection from "../../components/Hero-Section/HeroSection";

import ChooseUs from "../../components/Choose-us/ChooseUs";
import Features from "../../components/Feature-section/Features";

import Testimonials from "../../components/Testimonial/Testimonials";

import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import Services from "../../components/Courses-section/Courses";
import OurService from "../../components/Free-course-section/ourService";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <Services />
      <ChooseUs />
      <Features />
      <OurService />
      <Testimonials /> 
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
