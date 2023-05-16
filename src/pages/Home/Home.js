import React from 'react';
import '../../App.css';
import HeroSection from '../../components/Hero-Section/HeroSection';
//import Cards from '../Cards';


import ChooseUs from "../../components/Choose-us/ChooseUs";
import Features from "../../components/Feature-section/Features";

import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Courses-section/Courses";
import Cards from '../../components/Card/Cards';

//import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards/>
      {/* <About /> */}
      <Services />
      <ChooseUs />
      <Features />
      <Testimonials /> 
      {/* <Newsletter /> */}
      <Footer />
    
    </>
  );
}

export default Home;


