import React from "react";

import courseImg1 from "../../assests/images/Filter/home1.jpg";
import courseImg2 from "../../assests/images/Filter/home2.jpg";
import courseImg3 from "../../assests/images/Filter/industrial1.jpg";
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
  return (
    <>
      <Row className="service_header" gutter={0}>
        <Col className="service_Header" xs={{ span: 24 }} lg={{ span: 24 }}>
          <h1>WHAT THE HELL ARE WE SELLING ?</h1>
        </Col>
      </Row>
      <Row className="cards_col_2" gutter={0} justify="center">
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
    </>
  );
}

export default Services;
