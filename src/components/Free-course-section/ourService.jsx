import React from "react";
import { Container, Row, Col } from "reactstrap";

import ServiceImg01 from "../../assests/images/Service/service1.jpg";
import ServiceImg02 from "../../assests/images/Service/service2.jpg";
import ServiceImg03 from "../../assests/images/Service/service3.jpg";
import ServiceImg04 from "../../assests/images/Service/service4.jpg";
import OurServiceCard from "./ourServiceCard";

import "./free-course.css";

const items = [
  {
    id: "01",
    title: "Home Water Filter Service",
    imgUrl: ServiceImg01,
  
  },
  {
    id: "02",
    title: "Home Water Filter Service",
    imgUrl: ServiceImg02,
  
  },

  {
    id: "03",
    title: "Home Water Filter Service",
    imgUrl: ServiceImg03,
  
  },

  {
    id: "04",
    title: "Home Water Filter Service",
    imgUrl: ServiceImg04,
  
  },
];

const OurService = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
          </Col>

          {items.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <OurServiceCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurService;
