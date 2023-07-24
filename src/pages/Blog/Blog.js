import React, { useEffect } from "react";
import "./Blog.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import phi from "../../assests/images/blog/benifit.jpg";
import drink from "../../assests/images/blog/ph.jpg";
import lanka from "../../assests/images/blog/situation.jpg";
import water from "../../assests/images/blog/check.jpg";

import about from "../../assests/images/blog/banner4.jpg";
import ScrollReveal from "scrollreveal";

const Blog = () => {
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
      <Row>
        <Col className="blogbanner" xs={{ span: 24 }} lg={{ span: 24 }}>
          <img
            src={about}
            alt="about"
            style={{ maxWidth: "100%", height: "100%" }}
          ></img>
        </Col>
      </Row>

      <div className="blog_container revealElement">
        <Row className="Main_Blog">
          <Col
            className="blog_header"
            xs={{ span: 22 }}
            sm={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <img src={phi} alt="" />
            <p>
              <a
                href="https://medicine.kln.ac.lk/depts/publichealth/Fixed_Learning/PHI%20manual/PHI%20New%20Documents%20Including%20full%20PHI%20Manual%20$%20Office%20Documents/PHI%20Manual%20Full/04%20Chapter%202%20-%20Env%20Health%20-(79-131).pdf"
                target="_blank"
                rel="noreferrer"
                className="keyword_link"
              >
                #GoodWater #PHI #measurement
              </a>
            </p>
          </Col>
          <Col
            className="blog_header"
            xs={{ span: 22 }}
            sm={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <h6>
              Benifits of
              <span className="black-text-blog"> Water</span>
            </h6>
            <p>
              Water is a vital resource that sustains life on Earth. Beyond
              quenching our thirst, it plays a crucial role in maintaining our
              overall health and well-being. From boosting our physical
              performance to enhancing cognitive function, the benefits of
              drinking water are abundant and often underestimated. In this
              article, we will explore the remarkable advantages that hydration
              offers and why it should be an integral part of our daily
              routines.
            </p>
            <div className="">
              <Link to="/BlogPost1" className="nav-links">
                <p>Read More</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>



      <div className="blog_container revealElement">
        <Row className="Main_Blog " gutter={[16, 16]}>
          <Col
            className="blog_header"
            xs={{ span: 22 }}
            sm={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <img src={drink} alt="" />

            <p>
              <a
                href="https://medicine.kln.ac.lk/depts/publichealth/Fixed_Learning/PHI%20manual/PHI%20New%20Documents%20Including%20full%20PHI%20Manual%20$%20Office%20Documents/PHI%20Manual%20Full/04%20Chapter%202%20-%20Env%20Health%20-(79-131).pdf"
                target="_blank"
                rel="noreferrer"
                className="keyword_link"
              >
                #situation #lanka
              </a>
            </p>
          </Col>
          <Col
            className="blog_header"
            xs={{ span: 22 }}
            sm={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <h6>
              Ensuring Safe and
              <span className="black-text-blog">
                {" "}
                Healthy Drinking Water
              </span>{" "}
              in Sri Lanka
            </h6>

            <p>
              Access to clean and safe drinking water is a fundamental human
              right and plays a crucial role in maintaining public health. In
              Sri Lanka, like many other countries, ensuring the quality of
              drinking water is of utmost importance. To achieve this, it is
              essential to understand the measurement standards used to evaluate
              the safety and purity of drinking water. This article aims to shed
              light on the measurement criteria for good drinking water in Sri
              Lanka, emphasizing the parameters and guidelines set by relevant
              authorities.
            </p>
            <div className=" ">
              <Link to="/BlogPost2" className="nav-links">
                <p>Read More</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <div className="blog_container revealElement">
        <Row className="Main_Blog " gutter={[16, 16]}>
          <Col
            className="blog_header "
            xs={{ span: 22 }}
            sm={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <img src={lanka} alt="" />

            <p>
              <a
                href="https://medicine.kln.ac.lk/depts/publichealth/Fixed_Learning/PHI%20manual/PHI%20New%20Documents%20Including%20full%20PHI%20Manual%20$%20Office%20Documents/PHI%20Manual%20Full/04%20Chapter%202%20-%20Env%20Health%20-(79-131).pdf"
                target="_blank"
                rel="noreferrer"
                className="keyword_link"
              >
                #disease #lanka
              </a>
            </p>
          </Col>
          <Col
            className="blog_header "
            xs={{ span: 22 }}
            sm={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <h6>
              How the
              <span className="black-text-blog">
                {" "}
                current drinking situation
              </span>{" "}
              in Sri Lanka
            </h6>
            <p>
              Access to safe and clean drinking water is a vital necessity for
              the well-being and health of any nation's population. In Sri
              Lanka, an island nation located in South Asia, the provision of
              clean drinking water has been a significant concern. This article
              aims to assess the current drinking water situation in Sri Lanka,
              highlighting the challenges faced and the initiatives undertaken
              to ensure a sustainable supply of safe drinking water for its
              citizens.
            </p>
            <div className=" ">
              <Link to="/BlogPost3" className="nav-links">
                <p>Read More</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <div className="blog_container revealElement">
        <Row className="Main_Blog " gutter={[16, 16]}>
          <Col
            className="blog_header"
            xs={{ span: 22 }}
            sm={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <img src={water} alt="" />

            <p>
              <a
                href="https://medicine.kln.ac.lk/depts/publichealth/Fixed_Learning/PHI%20manual/PHI%20New%20Documents%20Including%20full%20PHI%20Manual%20$%20Office%20Documents/PHI%20Manual%20Full/04%20Chapter%202%20-%20Env%20Health%20-(79-131).pdf"
                target="_blank"
                rel="noreferrer"
                className="keyword_link"
              >
                #disease #lanka
              </a>
            </p>
          </Col>
          <Col
            className="blog_header "
            xs={{ span: 22 }}
            sm={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <h6>
              What are the
              <span className="black-text-blog">
                {" "}
                disease occur from water
              </span>{" "}
              in Sri Lanka ?
            </h6>
            <p>
              Water, the source of life, is indispensable for human existence.
              However, in Sri Lanka, the scarcity and contamination of clean
              drinking water have led to a concerning water crisis. This article
              aims to shed light on the waterborne diseases affecting the
              country and emphasizes the significance of clean drinking water.
              Join us as we explore the impact of unsafe water and uncover
              potential solutions to ensure a healthier future for all Sri
              Lankans.
            </p>
            <div className="">
              <Link to="/BlogPost4" className="nav-links">
                <p>Read More</p>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="Blog_Footer">
        <Footer />
      </div> */}
    </>
  );
};

export default Blog;
