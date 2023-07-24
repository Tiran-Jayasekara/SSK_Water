import React, { useEffect, useState ,useRef} from 'react';
import './ImageSlider.css';
import image1 from '../../assests/images/homeBanner/banner22.jpg';
import image2 from '../../assests/images/homeBanner/banner77.jpg';
import { Col, Row } from 'antd';
// import { Link } from 'react-router-dom';

const ImageChanger = () => {
  const images = [image1, image2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textRef = useRef(null);

  // useEffect(() => {
  //   const textElement = textRef.current;
  //   let text = 'Quality Water Quality Life ..';
  //   let index = 0;
  //   let isDeleting = false;

  //   const typeText = () => {
  //     textElement.textContent = text.slice(0, index);
      

  //     if (isDeleting) {
  //       index--;
  //     } else {
  //       index++;
  //     }

  //     if (index === text.length + 1) {
  //       isDeleting = true;
  //     }

  //     if (index === -1) {
  //       isDeleting = false;
  //       text = 'Quality Water Quality Life ..';
  //     }

  //     const typingDelay = isDeleting ? 150 : 150;
  //     setTimeout(typeText, typingDelay);
  //   };

  //   typeText();
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6900);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <Row className="background-row">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
          <div className="image-changer-container">
            {/* <img src={image1} alt="images"/> */}
            <img src={images[currentImageIndex]} alt="images"  />
            {/* <img src={images[currentImageIndex]} alt="images" className="zoom-image" /> */}
          </div>
          {/* <div className='banner_text'>
          <h1 ref={textRef} aria-label="Auto-typing text">
           
           
          </h1>
          </div> */}
        </Col>
      </Row>
      
    </>
  );
};

export default ImageChanger;
