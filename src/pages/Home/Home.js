import React, { useState, useEffect } from 'react';
import "../../App.css";
import ImageSlider from "../../components/SliderImges/ImageSlider";
//import Cards from '../Cards';

import ChooseUs from "../../components/Choose-us/ChooseUs";
import Features from "../../components/Feature-section/Features";

// import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Courses-section/Courses";
import Cards from "../../components/Card/Cards";
import "./Home.css";
import LoadingScreen from "../Loading/LoadingScreen";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading process
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ImageSlider />
          <ChooseUs />
          <Cards />
          <Services />
          <Features />
          {/* <Testimonials /> */}
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
