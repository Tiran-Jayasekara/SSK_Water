import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assests/images/about/gif2.gif";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="water-wave"></div>

      <Container>
        <Row className="justify-content-center">
          <Col lg="3" md="6" sm="6" xs="6" className="main-ssk">
            <h5>SSK WATER FILTERS</h5>
            <h6>
              SSK Water Technology is an innovative water filter company that
              provides advanced, sustainable solutions for clean and safe water.
            </h6>
          </Col>

          <Col lg="3" md="6" sm="6" xs="6">
            <img src={logo} alt="" className="footer_image" />
          </Col>

          <Col lg="3" md="6" sm="6" xs="6" className="secound_col">
            <h5>GET IN TOUCH</h5>
            <h6>
              SSK water Filter Technology
              <br />
              New Town,
              <br />
              Thambuththegama,
              <br />
              Anuradhapura,
              <br />
              Srilanka.
              <br />
              5000
            </h6>
          </Col>

          <Col lg="3" md="6" sm="6" xs="6">
            <div className="follows">
              <h5>FOLLOW US ON SOCIAL MEDIA</h5>
              <span>
                <a href="facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a href="facebook.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="https://www.tiktok.com/@sskwaterfiltertec?_t=8cN2W8W6PFi&_r=1">
                  <i className="fab fa-tiktok"></i>
                </a>
              </span>
              <span>
                <a href="https://www.youtube.com/channel/UCIYdZcGWvOtlYNLZJYm9eVA">
                  <i className="fab fa-youtube"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
