import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";

import chooseImg from "../../assests/images/Filter/filter4.png";
import "./choose-us.css";
import ScrollReveal from "scrollreveal";

import ReactPlayer from "react-player";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 2000,
      distance: "50px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

  return (
    <>
      <Row className="whowe revealElement">
        <Col className="Choose_h1" xs={{ span: 24 }} sm={{span: 24}} lg={{ span: 24 }}>
          <h1>
            <span className="black-text2">Who</span> We Are ?
          </h1>
        </Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        <Col
          className="describe"
          xs={{ span: 20 }}
          sm={{ span: 10 }}
          lg={{ span: 10 }}
        >
          <p>
            SSK Water Filters is a leading provider of premium water filtration
            solutions. We are dedicated to delivering high-quality products and
            services that ensure clean and safe water for our customers. With
            our cutting-edge technology and expertise, we offer innovative
            solutions that cater to diverse needs, including residential,
            commercial, and industrial applications. At SSK Water Filters, we
            are committed to improving the quality of life by providing the best
            water filtration solutions available in the market.
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 0 }} lg={{ span: 0 }}></Col>

        <Col
          className="choose_img_Header"
          xs={{ span: 22 }}
          sm={{ span: 10 }}
          lg={{ span: 10 }}
        >
          <div className="choose__img">
            {showVideo ? (
              <ReactPlayer
                url="https://youtu.be/pdwp6S1lrP0"
                controls
                width="100%"
                height="350px"
              />
            ) : (
              <img src={chooseImg} alt="" className="video_image" />
            )}

            {!showVideo && (
              <span className="play__icon">
                <i
                  className="ri-play-circle-line "
                  onClick={() => setShowVideo(!showVideo)}
                ></i>
              </span>
            )}
          </div>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
      </Row>
    </>
  );
};

export default ChooseUs;
