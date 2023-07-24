import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";

import img from "../../assests/images/Service/voice.png";
import ScrollReveal from "scrollreveal";

const Testimonials = () => {
  const [showDots, setShowDots] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleWindowResize = () => {
      setShowDots(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
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
      <Row className="Customer_voice revealElement">
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 2 }}></Col>
        <Col
          className="Voice_header"
          xs={{ span: 22 }}
          sm={{ span: 22 }}
          lg={{ span: 10 }}
        >
          <div className="testimonial__img ">
            <img src={img} alt="" className="w-100" />
          </div>
        </Col>

        <Col
          className="voice_text"
          xs={{ span: 20 }}
          sm={{ span: 22 }}
          lg={{ span: 10 }}
        >
          <h2>
              <span className="black-text4">Our Customer</span> Voice
            </h2>
          

          <Slider {...settings}>
            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">Excellent Service</h6>
                <p>
                  "I've been using SSK Water Filters for a while now, and I
                  couldn't be happier with their products. The water filter I
                  purchased has made a significant difference in the quality of
                  water in my home. Not only is the water clean and
                  fresh-tasting, but the customer service provided by SSK Water
                  Filters is outstanding. They are responsive, friendly, and
                  always ready to assist. I highly recommend SSK Water Filters
                  to anyone looking for top-notch water filtration solutions."
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">Tiran Jayasekara</h6>
                  <p>Udadumbara, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">Excellent Service</h6>
                <p>
                  "SSK Water Filters has truly impressed me with their
                  exceptional water filtration solutions. The filter I bought
                  from them has transformed the quality of water in my office.
                  It's crystal clear and free from any impurities. What sets SSK
                  Water Filters apart is their commitment to customer
                  satisfaction. Their 24-hour customer service is outstanding,
                  ensuring I receive assistance whenever I need it. If you're
                  seeking reliable water filters backed by excellent customer
                  support, SSK Water Filters is the way to go."
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">Chamal</h6>
                  <p>Badulla, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">Excellent Service</h6>
                <p>
                  "SSK Water Filters has exceeded my expectations in every
                  aspect. From the moment I reached out to inquire about their
                  products, their customer service team was professional and
                  attentive, guiding me through the selection process. The water
                  filter I purchased not only arrived quickly but also came with
                  a generous 1-year warranty. The filter itself is superb,
                  delivering pure, refreshing water. SSK Water Filters has
                  gained a loyal customer in me, and I highly recommend them for
                  their top-quality products and exceptional service."
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">Shehan Sampath</h6>
                  <p>Anuradapura, Sri Lanka</p>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
        <Col xs={{ span: 1 }} sm={{ span: 1 }} lg={{ span: 2 }}></Col>
      </Row>
    </>
  );
};

export default Testimonials;
