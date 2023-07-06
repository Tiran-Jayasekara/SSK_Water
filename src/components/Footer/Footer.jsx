import React from "react";
import { Col, Row } from "antd";
import logo from "../../assests/images/about/gif.gif";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="justify-content-center">
        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <h5>SSK WATER FILTERS</h5>
          <h6>
            SSK Water Technology is an innovative water filter company that
            provides advanced, sustainable solutions for clean and safe water.
          </h6>
          <Link to="/policy" className="privacyLink">
            <h6>Privacy Policy</h6>
          </Link>
          <Link to="/term" className="privacyLink">
            <h6>Term and Condition</h6>
          </Link>
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="text-center"
        >
          <img src={logo} alt="" className="footer_image" />
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="secound_col"
        >
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

        <Col xs={{ span: 10 }} sm={{ span: 10 }} lg={{ span: 5 }}>
          <div className="follows">
            <h5>FOLLOW US ON SOCIAL MEDIA</h5>
            <span>
              <a
                href="https://web.facebook.com/profile.php?id=100092485520069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
            <span>
              <a
                href="https://web.facebook.com/profile.php?id=100092485520069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.tiktok.com/@sskwaterfiltertec?_t=8cN2W8W6PFi&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/channel/UCIYdZcGWvOtlYNLZJYm9eVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
