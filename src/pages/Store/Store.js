import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
import { Col, Row } from "antd";
import ProductList from "./ProductList";
import "./Store.css";
import domestic from "../../assests/images/Filter/domestic.png";
import com from "../../assests/images/Filter/Commercial/4.png";
import ind from "../../assests/images/Filter/industrial.png";
import ion from "../../assests/images/Filter/ionizer.png";
import spare from "../../assests/images/Filter/spare.png";


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

  return (
    <>
      <div className="store_main">
        <Row>
          <Col
            className="store_header"
            xs={{ span: 10 }}
            sm={{ span: 10 }}
            lg={{ span: 14 }}
          >
            <h2>
              <span className="black-text">Store</span> The best way to buy the
              products you love.
            </h2>
          </Col>
          <Col
            className="store_header"
            xs={{ span: 10 }}
            sm={{ span: 10 }}
            lg={{ span: 8 }}
          >
            <Row>
              <Col
                className=""
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 24 }}
              >
                <div className="image-h6-container">
                  <img
                    src={domestic}
                    alt="contact"
                    className="image_store_contact"
                  />
                  <h6>Need shopping help?</h6>
                </div>
                <div className="storeLink">
                <a
                href="/#/contact"
                target="_blank"
                rel="noreferrer"
                className="keyword_link"
              >
                Check Here
              </a>
               
                </div>
              </Col>
             
            </Row>
          </Col>
        </Row>

        <Row>
          <Col
            className="Store_Nav_Bar"
            xs={{ span: 22 }}
            sm={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <div className="nav-bar-container">
              <Row className="nav-bar-row">
                <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
                <Col
                  className="Store_Nav_Bar"
                  xs={{ span: 4 }}
                  sm={{ span: 3 }}
                  lg={{ span: 3 }}
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
                  sm={{ span: 3 }}
                  lg={{ span: 3 }}
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
                  sm={{ span: 3 }}
                  lg={{ span: 3 }}
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
                  sm={{ span: 3 }}
                  lg={{ span: 3 }}
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
                  sm={{ span: 3 }}
                  lg={{ span: 3 }}
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
                <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
          <Col
            className="Store_product_List"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <div className="Products_List">{data}</div>
          </Col>
          <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>

          {/* <Col>
          <Testimonials />
        </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Store;
