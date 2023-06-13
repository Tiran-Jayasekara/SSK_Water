import React from "react";
import "../../App.css";

import "./heroSection.css";
import { Col, Row } from "antd";
import banner from "../../assests/images/contactus-banner.jpg";

function HeroSection() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <img
            src={banner}
            alt="about"
            style={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </Col>
      </Row>
    </>
  );
}

export default HeroSection;
