import React, { useState } from "react";
import { Col, Row } from "antd";

import chooseImg from "../../assests/images/Filter/filter4.png";
import "./choose-us.css";

import ReactPlayer from "react-player";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Row
        style={{
          height: "auto",
          backgroundColor: "rgba(18, 81, 255, 0.24)",
          paddingBottom: "30px",
        }}
        gutter={[16, 16]}
      >
        <Col className="Choose_h1" xs={{ span: 22 }} lg={{ span: 24 }}>
          <h1>Why Choose Us</h1>
        </Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        <Col
          className="describe"
          xs={{ span: 20 }}
          sm={{ span: 16 }}
          lg={{ span: 10 }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            mollitia nostrum harum eos praesentium odit a sed quod aut fugit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit omnis, culpa eligendi inventore perspiciatis minus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            cupiditate facilis provident quidem accusamus impedit tenetur
            laboriosam debitis nisi eius!
          </p>
        </Col>

        <Col
          className="choose_img_Header"
          xs={{ span: 22 }}
          sm={{ span: 16 }}
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
                  className="ri-play-circle-line"
                  onClick={() => setShowVideo(!showVideo)}
                ></i>
              </span>
            )}
          </div>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 0 }} lg={{ span: 2 }}></Col>
      </Row>
    </>
  );
};

export default ChooseUs;
