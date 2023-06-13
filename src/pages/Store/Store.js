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
import Testimonials from "../../components/Testimonial/Testimonials";

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
      <Row gutter={[16, 16]}>
        <Col className="Store_Header" xs={{ span: 24 }} lg={{ span: 24 }}>
          <h1>Our Store</h1>
        </Col>

        <Col
          className="Store_Nav_Bar"
          xs={{ span: 22 }}
          sm={{ span: 24 }}
          lg={{ span: 6 }}
        >
          <Row gutter={0}>
            <Col
              className="Store_Nav_Bar"
              xs={{ span: 4 }}
              sm={{ span: 4 }}
              lg={{ span: 24 }}
            >
              <div className="centered">
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
              <div className="centered">
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
              <div className="centered">
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
              <div className="centered">
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
              <div className="centered">
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
        </Col>

        <Col
          className="Store_product_List"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 18 }}
        >
          <div className="Products_List">{data}</div>
        </Col>
        <Col>
          <Testimonials />
        </Col>
      </Row>
    </>
  );
}

export default Store;
