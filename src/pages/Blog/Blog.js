import React,{useEffect} from "react";
import "./Blog.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import phi from "../../assests/images/blog/phi.jpg";
import drink from "../../assests/images/blog/drink.png";
import lanka from "../../assests/images/blog/lanka.png";
import water from "../../assests/images/blog/water.png";

import about from "../../assests/images/blog/3.png";
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
      <Row className="revealElement">
        <Col className="blogbanner" xs={{ span: 24 }} lg={{ span: 24 }}>
          <img
            src={about}
            alt="about"
            style={{ maxWidth: "100%", height: "auto" }}

          ></img>
        </Col>
      </Row>
      <div className="blog_container revealElement">
        <Row className="Main_Blog revealElement" gutter={[16, 16]}>
          <Col
            className="blog_header revealElement"
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
            sm={{ span: 12 }}
            lg={{ span: 14 }}
          >
            <h6>What is the measurement for good drinking water?</h6>
            <p>
              The measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used.The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used The
              measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used
            </p>
            <div className="button_container revealElement">
              <Link to="/BlogPost1" className="nav-links">
                <Button>Read More</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="blog_container revealElement">
        <Row className="Main_Blog revealElement" gutter={[16, 16]}>
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
            className="blog_header revealElement"
            xs={{ span: 22 }}
            sm={{ span: 12 }}
            lg={{ span: 14 }}
          >
            <h6>How the current drinking situation in Sri Lanka?</h6>
            <p>
              The measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used.The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used The
              measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used
            </p>
            <div className="button_container revealElement">
              <Link to="/BlogPost2" className="nav-links">
                <Button>Read More</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <div className="blog_container revealElement">
        <Row className="Main_Blog revealElement" gutter={[16, 16]}>
          <Col
            className="blog_header revealElement"
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
            className="blog_header revealElement"
            xs={{ span: 22 }}
            sm={{ span: 12 }}
            lg={{ span: 14 }}
          >
            <h6>What are the disease occur from water in Sri Lanka?</h6>
            <p>
              The measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used.The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used The
              measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used
            </p>
            <div className="button_container revealElement">
              <Link to="/BlogPost3" className="nav-links">
                <Button>Read More</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <div className="blog_container revealElement">
        <Row className="Main_Blog revealElement" gutter={[16, 16]}>
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
            className="blog_header revealElement"
            xs={{ span: 22 }}
            sm={{ span: 12 }}
            lg={{ span: 14 }}
          >
            <h6>How to prevent these situation?</h6>
            <p>
              The measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used.The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used The
              measurement for good drinking water involves assessing various
              factors to ensure its quality and safety. Here are some key
              measurements commonly used The measurement for good drinking water
              involves assessing various factors to ensure its quality and
              safety. Here are some key measurements commonly used
            </p>
            <div className="button_container revealElement">
              <Link to="/BlogPost4" className="nav-links">
                <Button>Read More</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="Blog_Footer">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
