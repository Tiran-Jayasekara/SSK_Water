import React, { useEffect, useState, useRef } from 'react';
import './ImageSlider.css';
import image1 from '../../assests/images/homeBanner/1.png';
import image2 from '../../assests/images/homeBanner/2.png';
import image3 from '../../assests/images/homeBanner/3.png';
import { Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';

const ImageChanger = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    let text = 'WELL COME TO SSK WATER FILTERS';
    let index = 0;
    let isDeleting = false;

    const typeText = () => {
      textElement.textContent = text.slice(0, index);
      

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      if (index === text.length + 1) {
        isDeleting = true;
      }

      if (index === -1) {
        isDeleting = false;
        text = 'WELL COME TO SSK WATER FILTERS';
      }

      const typingDelay = isDeleting ? 50 : 150;
      setTimeout(typeText, typingDelay);
    };

    typeText();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <Row className="background-row">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
          <div className="image-changer-container">
            <img src={images[currentImageIndex]} alt="images" className="zoom-image" />
          </div>
          <div className='banner_text'>
          <h1 ref={textRef} aria-label="Auto-typing text">
           
           
          </h1>
          </div>
        </Col>
      </Row>
      {/* <Row className="Home_hedder_container1">
        <Col xs={{ span: 14 }} lg={{ span: 14 }}>
          <h1>WE UNDERSTAND YOUR NEEDS ON WATER FILTER TECHNOLOGY</h1>
        </Col>
        <Col xs={{ span: 10 }} lg={{ span: 10 }} className="center-button">
          <Link to="/about" className="">
            <Button>ABOUT US</Button>
          </Link>
        </Col>
      </Row> */}
    </>
  );
};

export default ImageChanger;
