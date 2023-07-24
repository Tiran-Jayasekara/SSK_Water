import React from "react";
import "./Blog.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import mesher from "../../assests/images/blog/check.jpg";

const BlogPost4 = () => {
  return (
    <>
      <Row>
        <Col className="BlogPost1_header" xs={{ span: 20 }} lg={{ span: 16 }}>
          <h1>
            What are the
            <span className="black-text-blog"> disease occur from water </span>
            in Sri Lanka ?
          </h1>
        </Col>
        <Col className="blog1Image" xs={{ span: 20 }} lg={{ span: 20 }}>
          <img className="BlogPost1headerimg" src={mesher} alt="" />
        </Col>

        <Col className="blog1Para" xs={{ span: 20 }} lg={{ span: 20 }}>
          <h6>
            Section 1 : The Alarming Waterborne Disease Scenario in Sri Lanka
          </h6>
          <p>
            <b>The Silent Threat : Waterborne Diseases : </b> 
            Shocking statistics: Every day, 4,000 children lose their lives to
            waterborne diseases, predominantly in developing and underdeveloped
            nations. Sri Lanka's struggle: The country has been grappling with a
            persistent health issue since 1996 - chronic kidney disease of
            unknown origin (CKDu). Tracing the causes: Contaminated drinking
            water, harboring infections, microbial toxins, and pesticide
            pollutants, is a significant contributor to the spread of waterborne
            diseases.<br></br>
            <br></br>
          </p>

          <h6>Section 2 : The Hidden Dangers of Water Contamination</h6>
          <p>
            <b>Unraveling the Water Quality Crisis : </b> The impact of groundwater:
            Studies reveal a correlation between groundwater quality and the
            prevalence of CKDu. Identifying natural contaminants: Elevated
            levels of fluoride, calcium, and magnesium, alongside lower
            concentrations of heavy metals, have been found in affected regions.
            Unmasking the processes: Water-rock interactions, dissolution, ion
            exchange, and precipitation play crucial roles in shaping
            groundwater chemistry. Section 3: The Human Toll: Impacts on Public
            Health and Human Rights.<br></br>
            <br></br>
          </p>
          <h6>
            Section 3: The Human Toll: Impacts on Public Health and Human Rights
          </h6>

          <p>
          <b>Safeguarding the Right to Clean Drinking Water : </b> Recognizing a
            fundamental human right: Access to safe drinking water is essential
            for the wellbeing of individuals. A grim reality: Globally, 2.2
            million people, predominantly children under five, succumb to
            diarrheal diseases annually, with 90% of cases caused by consuming
            unsafe water, inadequate sanitation, and poor hygiene. Sri Lanka's
            challenges: A significant portion of households (one-quarter) lacks
            access to clean drinking water, while 18% of children face
            inadequate water supply and sanitation facilities.<br></br>
            <br></br>
          </p>

          <h6>Section 4 : Empowering Change for a Healthier Future</h6>
          <p>
          <b>Taking Action to Protect Lives : </b> Spreading awareness: Educating
            communities about the criticality of clean drinking water and the
            risks associated with waterborne diseases. Strengthening
            infrastructure: Investing in improved water supply and sanitation
            facilities to ensure access to safe drinking water for all
            communities. Monitoring water quality: Implementing regular testing
            and monitoring programs to identify and address contamination issues
            promptly. Community engagement: Encouraging active participation
            from individuals and communities in preserving water sources and
            promoting proper hygiene practices.<br></br>
            <br></br>
          </p>

          <h6>Conclusion</h6>
          <p>
            Access to clean drinking water is not just a necessity; it is a
            fundamental human right crucial for public health. Sri Lanka's water
            crisis, characterized by the prevalence of waterborne diseases,
            demands immediate attention and concerted efforts. By raising
            awareness, enhancing infrastructure, and fostering community
            engagement, we can overcome these challenges and make clean drinking
            water accessible to every Sri Lankan. Let us join hands to protect
            lives, safeguard health, and pave the way for a brighter and
            healthier future in Sri Lanka.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost3" className="nav-links">
              <Button>Previous</Button>
            </Link>
          </div>
        </Col>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/Blog" className="nav-links">
              <Button>Home</Button>
            </Link>
          </div>
        </Col>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost1" className="nav-links">
              <Button>Next</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost4;
