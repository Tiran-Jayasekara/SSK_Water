import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/Filter/home1.jpg";
import courseImg2 from "../../assests/images/Filter/home2.jpg";
import courseImg3 from "../../assests/images/Filter/industrial1.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "World’s Best RO Water Purifiers Protect your Family with the Purest Drinking Water",
    Price: 12,
    customer: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Best Water Purifiers in Sri Lanka (2023) , High storage capacity , Low maintenance Free pre-filter ",
    Price: 12,
    customer: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Vikas Pollution is highly acclaimed in the industry for manufacturing",
    Price: 12,
    customer: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Filters</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
