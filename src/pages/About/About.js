import React from "react";

import { Col, Row } from "antd";

import "./about.css";

import logo from "../../assests/images/about/gif.gif";
import about from "../../assests/images/about/5.png";
import trusted from "../../assests/images/about/trusted.png";
import acolabarateout from "../../assests/images/about/colabarate.png";
import responce from "../../assests/images/about/responce.png";
import prograsive from "../../assests/images/about/prograsive.png";
import Affordable from "../../assests/images/about/aff.gif";
import HighestQuality from "../../assests/images/about/quality.gif";
import delivery from "../../assests/images/about/delevary.gif";
import smart from "../../assests/images/about/smart.gif";
import martin from "../../assests/images/about/company.png";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <img
            src={about}
            alt="about"
            style={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </Col>

        <div className="blog_container_about">
          <Row className="Main_Blog" gutter={[16, 16]}>
            <Col
              className="blog_header"
              xs={{ span: 22 }}
              sm={{ span: 8 }}
              lg={{ span: 8 }}
            >
              <img src={logo} alt="" />
            </Col>
            <Col
              className="blog_header1"
              xs={{ span: 22 }}
              sm={{ span: 12 }}
              lg={{ span: 14 }}
            >
              <h6>SSK WATER FILTERS</h6>
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

      {/* <Row>
      <Col xs={{ span: 22 }} sm={{ span: 4 }} lg={{ span: 4 }}></Col>
      <Col
          className="Contact_Cards"
          xs={{ span: 22 }}
          sm={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main1"
            hoverable
            cover={
              <img
                alt="example"
                src={logo}
                style={{ borderRadius: "20px" }}
              />
            }
            actions={[
              
            ]}
          >
            <Meta title="QUICK CONTACT" />
          </Card>
        </Col>
        <Col
          className="Contact_Cards"
          xs={{ span: 22 }}
          sm={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main2"
            hoverable
            cover={
              <img
                alt="example"
                src={logo}
                style={{ borderRadius: "20px" }}
              />
            }
          >
            <Meta
              title="CUSTOMER SERVICES"
              description={
                <>
                  <div>
                    <h5>Reliable and very fast service within 24 hours.</h5>
                  </div>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 4 }} lg={{ span: 4 }}></Col>
      </Row> */}

      <div className="vision">
        <Row>
          <Col
            className="Philosophy"
            xs={{ span: 20 }}
            sm={{ span: 22 }}
            lg={{ span: 16 }}
          >
            <h1>OUR VISION</h1>
            <p>
              Our vision is to be a Sri Lankan leader in providing advanced
              water filtration solutions that contribute to a sustainable,
              water-secure future. We strive to revolutionize how water is
              treated and consumed,ensuring clean and safe water for all.
            </p>
          </Col>
        </Row>
      </div>
      <Row>
        <Col
          className="Philosophy"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <h1>OUR PURPOSE</h1>
        </Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        <Col
          className="purpose"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={trusted} alt="" />
          <h5>TRUSTED</h5>
        </Col>
        <Col
          className="purpose"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={acolabarateout} alt="" />
          <h5>COLLABORATIVE</h5>
        </Col>
        <Col
          className="purpose"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={responce} alt="" />
          <h5>RESPONSIBLE</h5>
        </Col>
        <Col
          className="purpose"
          xs={{ span: 5 }}
          sm={{ span: 5 }}
          lg={{ span: 5 }}
        >
          <img className="" src={prograsive} alt="" />
          <h5>PROGRESSIVE</h5>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
      </Row>

      <Row>
        <div className="vision">
          <Row>
            <Col
              className="Philosophy"
              xs={{ span: 20 }}
              sm={{ span: 22 }}
              lg={{ span: 16 }}
            >
              <h1>OUR MISSION</h1>
              <p>
                our mission is to provide individuals, businesses, and
                organizations with the highest quality water filtration
                solutions. We strive to deliver exceptional products that ensure
                clean and safe water while prioritizing efficiency and
                environmental sustainability. Through innovation, research, and
                a commitment to excellence, we aim to improve lives and
                contribute to a healthier, more sustainable future for all.
              </p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col
            className="Philosophy"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <h1>WHY YOU HAVE TO CHOSE US?</h1>
          </Col>

          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
          <Col
            className="purpose"
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <img className="" src={Affordable} alt="" />
            {/* <h5>Affordabilty</h5> */}
          </Col>
          <Col
            className="purpose"
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <img className="" src={HighestQuality} alt="" />
            {/* <h5>Highest quality</h5> */}
          </Col>
          <Col
            className="purpose"
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <img className="" src={delivery} alt="" />
            {/* <h5>Island wide coverage</h5> */}
          </Col>
          <Col
            className="purpose"
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            lg={{ span: 4 }}
          >
            <img className="" src={smart} alt="" />
            {/* <h5>Smart Solutions</h5> */}
          </Col>
          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        </Row>

        <Row>
          <Col
            className="Philosophy1"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <h1>COMPANIES THAT WE ARE COLLABERATE WITH</h1>
          </Col>

          <Col
            className="purpose1"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <img className="" src={martin} alt="" />
          </Col>
        </Row>
      </Row>
      <Footer />
    </>
  );
};

export default About;
