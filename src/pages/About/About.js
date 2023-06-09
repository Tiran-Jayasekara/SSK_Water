import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/logo3.png";
import CountUp from "react-countup";
import "./about.css";

const About = () => {
  return (
    <section>
      <Container>
        <Row>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.307539947541!2d80.3361678749926!3d8.17173980181844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcefc8b6f2e8f9%3A0x960b61f4ad847d81!2sSSK%20Water%20Filter%20Technology!5e0!3m2!1sen!2slk!4v1683954770123!5m2!1sen!2slk" 
          width="600" 
          height="450" 
          style={{ border:"0"}} 
          allowfullscreen="" 
          loading="lazy" 
          title="Google Map of SSK Water Filter Technology">
        </iframe>


          <Col lg="5" md="10">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={120} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Installed Filters</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={100} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Repaired Filters</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  {/* <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title"></p>
                  </div> */}

                  {/* <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;