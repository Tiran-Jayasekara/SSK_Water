import React ,{useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";
import ScrollReveal from "scrollreveal";

const FeatureData = [
  {
    title: "Quick Delivery",
    desc: "Quick delivery of premium water filtration solutions for clean and safe water, enhancing your quality of life",
    icon: "ri-home-4-fill",
  },

  {
    title: "24 hour Service",
    desc: "24-hour customer service for prompt assistance and support with your water filtration needs",
    icon: "ri-customer-service-2-line",
  },

  {
    title: "1 year warranty",
    desc: "Enjoy peace of mind with a 1-year warranty on our water filtration solutions.",
    icon: "ri-hand-heart-line",
  },
];

const Features = () => {
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
    <section style={{ marginTop: "30px" }} className="features">
      <Container>
        <Row >
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index} >
              <div className="single__feature text-center px-4 service_p revealElement ">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
