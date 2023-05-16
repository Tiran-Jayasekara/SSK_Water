import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Button } from '@material-ui/core';
import ProductList from './ProductList';
import './Store.css'

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
    <section>
      <Container className="Container-custom">
  <Row className="product-buttons-row">
    <Col xs="12" md="6" lg="2" className="my-col">
      <div className="Product_NavBar">
        <ul className="d-flex">
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Osmosis'} />) }}>Home</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Ionizers'} />) }}>Ionizers</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Distillation'} />) }}>Ro Filter</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Ceramic'} />) }}>Industrial</Button>
          </li>
          <li>
            <Button onClick={() => { SetData(<ProductList Category={'Osmosis'} />) }}>Spare Parts</Button>
          </li>
        </ul>
      </div>
    </Col>
    <Col xs="12" md="6" lg="10" className="product-list-col" ref={containerRef}>
      <div className="Products_List">
        {data}
      </div>
    </Col>
  </Row>
</Container>

    </section>
    
  )
}

export default Store