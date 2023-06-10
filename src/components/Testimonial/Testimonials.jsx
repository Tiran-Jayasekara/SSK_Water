import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { useEffect , useState } from "react";

import img from "../../assests/images/Service/feedback.jpg";

const Testimonials = () => {
  const [showDots, setShowDots] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleWindowResize = () => {
      setShowDots(window.innerWidth > 1000);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: showDots,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
      <Row>
          <Col lg="6" md="6">
          <div className="testimonial__img">
                <img src={img} alt="" className="w-100" />
              </div>
          </Col>

          <Col lg="6" md="6" className="slider">
          <h2 className="customer_header">Our Customer Voice</h2>

<Slider {...settings}>
  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Tiran Jayasekara</h6>
        <p>Udadumbara, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Chamal</h6>
        <p>Badulla, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Shehan Sampath</h6>
        <p>Anuradapura, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Malinga Bandara</h6>
        <p>Mahiyanganaya, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Malinga Bandara</h6>
        <p>Mahiyanganaya, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Tiran Jayasekara</h6>
        <p>Mahiyanganaya, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Tiran Jayasekara</h6>
        <p>Mahiyanganaya, Sri Lanka</p>
      </div>
    </div>
  </div>

  <div>
    <div className="single__testimonial">
      <h6 className="mb-3 fw-bold">
        Excellent Service
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis saepe id voluptas molestiae. Aperiam corrupti
        voluptas earum at molestiae neque!
      </p>

      <div className="student__info mt-4">
        <h6 className="fw-bold">Tiran Jayasekara</h6>
        <p>Udadumbara, Sri Lanka</p>
      </div>
    </div>
  </div>
</Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
