import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Button } from '@material-ui/core';
import ProductList from './ProductList';
import './Store.css'
import Footer from '../../components/Footer/Footer';


function Store() {

  const [data , SetData] = useState([
    <ProductList Category={'Osmosis'}/>
]);
const containerRef = useRef(null);

useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollTop = 0;
  }
}, [data]);

  return (
    <>
    <section>
  <Container className="Container-custom">
  <Row className="product-buttons-row">
    <Col lg="3" sm ="12" xs="12" className="my-col">
      <div className="Product_NavBar">
        <ul className="d-flex">
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Domestic'} />) }} >Domestic RO</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Commercial'} />) }}>Commercial RO</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Industrial'} />) }}>Industrial RO</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Ionizer'} />) }}>Ionizer Machine</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Spare'} />) }}>Spare Parts</Button>
          </li>
        </ul>
      </div>
    </Col>
    <Col lg="9">
      <div className="Products_List">
        {data}
      </div>
    </Col>
  </Row>
</Container>
    </section>
    <Footer />
    </>
  )
}

export default Store