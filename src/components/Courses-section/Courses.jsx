import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/Filter/home1.jpg";
import courseImg2 from "../../assests/images/Filter/home2.jpg";
import courseImg3 from "../../assests/images/Filter/industrial1.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id:1,
    title: "World’s Best RO Water Purifiers Protect your Family with the Purest Drinking Water",
    Price: 78000,
    customer: 132,
    rating: 98,
    imgUrl: courseImg1,
  },

  {
    id:2,
    title: "Best Water Purifiers in Sri Lanka (2023) , High storage capacity ",
    Price: 80000,
    customer: 75,
    rating: 60,
    imgUrl: courseImg2,
  },

  {
    id:3,
    title: "Vikas Pollution is highly acclaimed in the industry for manufacturing",
    Price: 200000,
    customer: 40,
    rating: 38,
    imgUrl: courseImg3,
  },
];

function Services() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="our_filters">
                <h2>Our Filters</h2>
              </div>
              <div className="w-100 text-md-end mb-3 mb-md-0">
              </div>
              {/* <div className="w-100 text-md-end">
              <button className="btn">See All</button>
            </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
