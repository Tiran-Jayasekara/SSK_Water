import React from "react";
import "./Blog.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

import mesher from "../../assests/images/blog/situation.jpg";

const BlogPost3 = () => {
  return (
    <>
      <Row>
        <Col className="BlogPost1_header" xs={{ span: 20 }} lg={{ span: 16 }}>
          <h1>
            How the current
            <span className="black-text-blog"> drinking situation </span>
            in Sri Lanka
          </h1>
        </Col>
        <Col className="blog1Image" xs={{ span: 20 }} lg={{ span: 20 }}>
          <img className="BlogPost1headerimg" src={mesher} alt="" />
        </Col>

        <Col className="blog1Para" xs={{ span: 20 }} lg={{ span: 20 }}>
          <h6>Availability and Accessibility</h6>
          <p>
            Despite progress in recent years, Sri Lanka continues to face
            challenges in providing access to safe drinking water for all its
            citizens. While the urban areas generally have better access to
            treated water supplies, many rural and remote regions still rely on
            groundwater sources, which may be prone to contamination. The
            availability and accessibility of clean drinking water remain a
            significant concern, particularly in marginalized communities.
            <br></br> <br></br>
          </p>

          <h6>Water Quality and Contamination Issues</h6>
          <p>
            Water contamination is a pressing issue that affects the quality of
            drinking water in Sri Lanka. Contamination can occur due to various
            factors, including industrial pollutants, agricultural runoff,
            inadequate sanitation practices, and natural occurrences such as
            floods and droughts. These factors contribute to the presence of
            harmful substances, such as heavy metals, pesticides, and microbial
            pathogens, posing risks to public health.<br></br> <br></br>
          </p>

          <h6>Waterborne Diseases</h6>
          <p>
            The inadequate provision of clean drinking water exposes Sri Lankans
            to waterborne diseases. Contaminated water sources can lead to the
            spread of diseases like diarrhea, cholera, typhoid, and hepatitis A.
            Vulnerable populations, such as children and the elderly, are
            particularly at risk. Addressing waterborne diseases requires a
            comprehensive approach involving improved water quality, sanitation
            facilities, and hygiene practices.<br></br> <br></br>
          </p>

          <h6>Government Initiatives and Policies</h6>
          <p>
            Recognizing the importance of clean drinking water, the Sri Lankan
            government has implemented several initiatives to address the
            challenges in water supply and quality: <br></br>
            <b>a. National Water Supply and Drainage Board (NWSDB): </b>
            The
            NWSDB plays a crucial role in managing water resources and providing
            safe drinking water to the population. It oversees water treatment,
            distribution networks, and quality monitoring across the country. <br></br>

            <b>b. Rural Water Supply and Sanitation Project (RWSSP):</b> This project aims
            to improve access to safe drinking water and sanitation facilities
            in rural areas. It involves the construction and rehabilitation of
            water supply schemes, rainwater harvesting systems, and community
            education on hygiene practices. <br></br> 
            <b>c. Policy and Regulatory Framework: </b>
            The government has developed policies and regulations to ensure
            water quality standards are met. These include setting permissible
            limits for contaminants, conducting regular monitoring, and
            implementing penalties for non-compliance
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost2" className="nav-links">
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
            <Link to="/BlogPost4" className="nav-links">
              <Button>Next</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost3;
