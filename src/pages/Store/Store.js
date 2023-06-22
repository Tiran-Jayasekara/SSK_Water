import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
import { Col, Row } from "antd";
import ProductList from "./ProductList";
import "./Store.css";
import domestic from "../../assests/images/Filter/domestic.png";
import com from "../../assests/images/Filter/com.png";
import ind from "../../assests/images/Filter/ind.png";
import ion from "../../assests/images/Filter/ion.png";
import spare from "../../assests/images/Filter/spare.png";
import image1 from "../../assests/images/store/1.png";
import image2 from "../../assests/images/store/4.png";
import image3 from "../../assests/images/store/3.png";
import Slider from "react-slick";

function Store() {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetchData("Domestic"); // Fetch data for the initial category
  }, []);

  const fetchData = (category) => {
    setTimeout(() => {
      const fetchedData = [<ProductList key={category} Category={category} />];

      SetData(fetchedData);
    });
  };





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
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
  };


  return (
    <>
      <Row>
            <Col
              className="store_slider"
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 24 }}
            >
              <Slider {...settings}>
                <div className="slideshow-container-store">
                  <img src={image1} alt="slideshow" />
                </div>
                
                <div className="slideshow-container-store">
                  <img src={image2} alt="slideshow" />
                </div>
                <div className="slideshow-container-store">
                  <img src={image3} alt="slideshow" />
                </div>
              </Slider>
            </Col>
          
          {/* <img
            src={about3}
            className="topimage1"
            alt="Domestic Icon"
            style={{ maxWidth: "100%" }}
          /> */}
          
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <div className="store_hedder_container">
            <h1> OUR STORE</h1>
          </div>
        </Col>

        {/* <Col className="Store_Header" xs={{ span: 24 }} lg={{ span: 24 }}>
          <h1>Our Store</h1>
        </Col> */}

        <Col
          className="Store_Nav_Bar"
          xs={{ span: 22 }}
          sm={{ span: 24 }}
          lg={{ span: 4 }}
        >
          <div className="nav-bar-container">
            <Row gutter={0}>
              <Col
                className="Store_Nav_Bar"
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                lg={{ span: 24 }}
              >
                <div className="centered1">
                  <img
                    src={domestic}
                    alt="Domestic Icon"
                    className="button-icon"
                    onClick={() => {
                      SetData(<ProductList Category={"Domestic"} />);
                    }}
                  />
                  <h3>Domestic</h3>
                </div>
              </Col>

              <Col
                className="Store_Nav_Bar"
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                lg={{ span: 24 }}
              >
                <div className="centered1">
                  <img
                    src={com}
                    alt="Domestic Icon"
                    className="button-icon"
                    onClick={() => {
                      SetData(<ProductList Category={"Commercial"} />);
                    }}
                  />
                  <h3>Commercial</h3>
                </div>
              </Col>

              <Col
                className="Store_Nav_Bar"
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                lg={{ span: 24 }}
              >
                <div className="centered1">
                  <img
                    src={ind}
                    alt="Industrial"
                    className="button-icon"
                    onClick={() => {
                      SetData(<ProductList Category={"Industrial"} />);
                    }}
                  />
                  <h3>Industrial</h3>
                </div>
              </Col>

              <Col
                className="Store_Nav_Bar"
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                lg={{ span: 24 }}
              >
                <div className="centered1">
                  <img
                    src={ion}
                    alt="Industrial"
                    className="button-icon"
                    onClick={() => {
                      SetData(<ProductList Category={"Ionizer"} />);
                    }}
                  />
                  <h3>Ionizer</h3>
                </div>
              </Col>

              <Col
                className="Store_Nav_Bar"
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                lg={{ span: 24 }}
              >
                <div className="centered1">
                  <img
                    src={spare}
                    alt="Industrial"
                    className="button-icon"
                    onClick={() => {
                      SetData(<ProductList Category={"Spare"} />);
                    }}
                  />
                  <h3>Spare Parts</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col
          className="Store_product_List"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 18 }}
        >
          <div className="Products_List">{data}</div>
        </Col>

        {/* <Col>
          <Testimonials />
        </Col> */}
      </Row>
    </>
  );
}

export default Store;
