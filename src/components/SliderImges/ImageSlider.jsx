import React, { useEffect, useState } from "react";
import "./ImageSlider.css"; // Import your custom CSS file
import image1 from "../../assests/images/store/1.png";
import image2 from "../../assests/images/store/4.png";
import image3 from "../../assests/images/store/3.png";
import Slider from "react-slick";
import { Col, Row } from "antd";

const Slideshow = () => {
  const [showDots, setShowDots] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleWindowResize = () => {
      setShowDots(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: showDots,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
  };

  return (
    <Row>
      <Col className="" xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
        <Slider {...settings}>
          <div className="slideshow-container">
            <img src={image1} alt="slideshow" />
          </div>
          <div className="slideshow-container">
            <img src={image2} alt="slideshow" />
          </div>
          <div className="slideshow-container">
            <img src={image3} alt="slideshow" />
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default Slideshow;
