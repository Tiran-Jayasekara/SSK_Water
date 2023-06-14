import React from 'react';
import { Carousel } from 'antd';
import './ImageSlider.css'; // Import your custom CSS file
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "../../assests/images/contactus-banner.jpg"


const images = [
  image1,
  image2,
  image3,
  image4,
];

const Slideshow = () => {
    return (
      <div className="slideshow-container">
        <Carousel autoplay dots={false} effect="fade">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slideshow-image" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default Slideshow;

