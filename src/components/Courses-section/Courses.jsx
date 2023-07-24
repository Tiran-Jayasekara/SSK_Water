import React ,{useEffect} from "react";
import ScrollReveal from "scrollreveal";

import courseImg1 from "../../assests/images/Filter/home1.png";
import courseImg2 from "../../assests/images/Filter/home2.png";
import courseImg3 from "../../assests/images/Filter/home3.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { Col, Row } from "antd";

const coursesData = [
  {
    id: 1,
    title:
      "World’s Best RO Water Purifiers Protect your Family with the Purest",
    Price: 78000,
    customer: 132,
    rating: 98,
    imgUrl: courseImg1,
  },

  {
    id: 2,
    title: "Best Water Purifiers in Sri Lanka (2023) , High storage capacity ",
    Price: 80000,
    customer: 75,
    rating: 60,
    imgUrl: courseImg2,
  },

  {
    id: 3,
    title:
      "Vikas Pollution is highly acclaimed in the industry for manufacturing",
    Price: 200000,
    customer: 40,
    rating: 38,
    imgUrl: courseImg3,
  },
];

function Services() {
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
    <div className="service_header">
      <Row >
        <Col className="service_Header revealElement" xs={{ span: 20 }} lg={{ span: 24 }}>
          <h1>What We Sell</h1>
          <p>World’s Best RO Water Purifiers</p>
          
        </Col>
      </Row>
      <Row className="cards_col_3 revealElement" justify="center">
        <Col lg={{ span: 2 }} xs={{ span: 20 }}></Col>
        {coursesData.map((item) => (
          <Col
            className="Our_filters"
            key={item.id}
            xs={{ span: 16 }}
            sm={{ span: 16 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
          >
            <CourseCard key={item.id} item={item} />
          </Col>
        ))}
        <Col lg={{ span: 2 }} xs={{ span: 20 }}></Col>
      </Row>
    </div>
  );
}

export default Services;
