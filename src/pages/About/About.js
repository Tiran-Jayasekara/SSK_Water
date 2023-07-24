import React, { useEffect } from "react";

import { Col, Row } from "antd";
import ScrollReveal from "scrollreveal";

import "./about.css";

import logo from "../../assests/images/about/gif.gif";
import vision from "../../assests/images/about/vision2.png";
import mission from "../../assests/images/about/mission.png";
import trusted from "../../assests/images/about/trusted.png";
import acolabarateout from "../../assests/images/about/colabarate.png";
import responce from "../../assests/images/about/responce.png";
import prograsive from "../../assests/images/about/prograsive.png";

import Affordable from "../../assests/images/about/aff.gif";
import HighestQuality from "../../assests/images/about/quality.gif";
import delivery from "../../assests/images/about/delevary.gif";
import smart from "../../assests/images/about/smart.gif";

import martin from "../../assests/images/about/company/1.png";
import vontron from "../../assests/images/about/company/2.png";
import cruze from "../../assests/images/about/company/3.png";
import aqua from "../../assests/images/about/company/4.png";

import Footer from "../../components/Footer/Footer";

const About = () => {
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
      <Row className="about_Top_background revealElement">
        <Col
          className="about_Top"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 24 }}
        >
          <h2>
            <span className="black-text5 revealElement">SSK</span> Water Filters
          </h2>
          <p>
            SSK Water Filters Pvt Ltd is a start-up that specializes in advanced
            water filtration solutions.
          </p>
        </Col>
      </Row>

      <Row>
        <div className="blog_container_about revealElement">
          <Row className="Main_Blog">
            <Col
              className="about_header"
              xs={{ span: 22 }}
              sm={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <img src={logo} alt="" />
            </Col>
            <Col
              className="blog_header1"
              xs={{ span: 22 }}
              sm={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <p>
                SSK Water Filters Pvt Ltd is a start-up that specializes in
                advanced water filtration solutions. Our mission is to provide
                individuals, businesses, and organizations with cutting-edge
                technology to purify and ensure access to clean, safe water. We
                offer a range of innovative water filters and purification
                systems designed to meet diverse needs and requirements. Whether
                it's for residential use, commercial applications, or industrial
                purposes, SSK Water Filters is committed to delivering reliable
                and efficient water filtration solutions that enhance the
                quality of life for our customers.
              </p>
              <div className="button_container"></div>
            </Col>
          </Row>
        </div>
      </Row>

      <Row>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
        <Col
          className="vimi revealElement"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 7 }}
        >
          <img src={vision} alt="" />
          <h1>
            <span className="black-text-vision">V</span>ISION
          </h1>
          <p>
            Our vision is to be a Sri Lankan leader in providing advanced water
            filtration solutions that contribute to a sustainable, water-secure
            future. We strive to revolutionize how water is treated and
            consumed,ensuring clean and safe water for all.
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 0 }}></Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 0 }}></Col>

        <Col
          className="vimi revealElement"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 7 }}
        >
          <img src={mission} alt="" />
          <h1>
            <span className="black-text-vision">M</span>ISSION
          </h1>
          <p>
            our mission is to provide individuals, businesses, and organizations
            with the highest quality water filtration solutions. We strive to
            deliver exceptional products that ensure clean and safe water while
            prioritizing efficiency and environmental sustainability.
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
      </Row>

      <div className="purpose_background revealElement">
        <Row>
          <Col
            className="Philosophy"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <h1>Purpose</h1>
          </Col>

          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
          <Col
            className="purpose"
            xs={{ span: 5 }}
            sm={{ span: 5 }}
            lg={{ span: 5 }}
          >
            <div className="image-container" style={{ textAlign: "center" }}>
              <img className="" src={trusted} alt="" />
              <h5>TRUSTED</h5>
            </div>
          </Col>
          <Col
            className="purpose"
            xs={{ span: 5 }}
            sm={{ span: 5 }}
            lg={{ span: 5 }}
          >
            <div className="image-container" style={{ textAlign: "center" }}>
              <img className="" src={acolabarateout} alt="" />
              <h5>COLLABORATIVE</h5>
            </div>
          </Col>
          <Col
            className="purpose"
            xs={{ span: 5 }}
            sm={{ span: 5 }}
            lg={{ span: 5 }}
          >
            <div className="image-container" style={{ textAlign: "center" }}>
              <img className="" src={responce} alt="" />
              <h5>RESPONSIBLE</h5>
            </div>
          </Col>
          <Col
            className="purpose"
            xs={{ span: 5 }}
            sm={{ span: 5 }}
            lg={{ span: 5 }}
          >
            <div className="image-container" style={{ textAlign: "center" }}>
              <img className="" src={prograsive} alt="" />
              <h5>PROGRESSIVE</h5>
            </div>
          </Col>
          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        </Row>
      </div>

      <Row className="WhyChose">
        <Col
          className="ChooseUs revealElement"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <h1>Why Chose Us</h1>
        </Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        <Col
          className="purpose revealElement"
          xs={{ span: 4 }}
          sm={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <div className="image-container" style={{ textAlign: "center" }}>
            <img className="" src={Affordable} alt="" />
            <h5>Affordabilty</h5>
          </div>
        </Col>
        <Col
          className="purpose revealElement"
          xs={{ span: 4 }}
          sm={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <div className="image-container" style={{ textAlign: "center" }}>
            <img className="" src={HighestQuality} alt="" />
            <h5>Highest quality</h5>
          </div>
        </Col>
        <Col
          className="purpose revealElement"
          xs={{ span: 4 }}
          sm={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <div className="image-container" style={{ textAlign: "center" }}>
            <img className="" src={delivery} alt="" />
            <h5>Island wide coverage</h5>
          </div>
        </Col>
        <Col
          className="purpose revealElement"
          xs={{ span: 4 }}
          sm={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <div className="image-container" style={{ textAlign: "center" }}>
            <img className="" src={smart} alt="" />
            <h5>Smart Solutions</h5>
          </div>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
      </Row>

      <Row className="weAreCollabarate revealElement">
        <Col
          className="Philosophy1"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 20 }}
        >
          <h1>We Are Collabarate With</h1>
        </Col>
      </Row>

      <Row className="revealElement">
        <Col
          className=""
          xs={{ span: 2 }}
          sm={{ span: 2 }}
          lg={{ span: 2 }}
        ></Col>

        <Col
          className="companyImage"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={martin} alt="" />
        </Col>
        <Col
          className="companyImage"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={vontron} alt="" />
        </Col>
        <Col
          className="companyImage"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={cruze} alt="" />
        </Col>
        <Col
          className="companyImage"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={aqua} alt="" />
        </Col>
        <Col
          className="purpose1"
          xs={{ span: 2 }}
          sm={{ span: 2 }}
          lg={{ span: 2 }}
        ></Col>
      </Row>
      <Footer />
    </>
  );
};

export default About;
