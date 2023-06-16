import React from 'react';
import './ImageSlider.css'; // Import your custom CSS file
import image1 from "./banner.gif";


const Slideshow = () => {
    return (
      <div className="slideshow-container">
              <img src={image1} alt="slideshow" />
      </div>
    );
  };

export default Slideshow;

