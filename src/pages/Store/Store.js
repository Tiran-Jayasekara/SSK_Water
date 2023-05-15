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
        <Row>
          <Col lg="2" md="4" className="my-col">
          <div className='Product_NavBar'>
            <ul>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Osmosis'}/>)
            }}>Osmosis</Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Ionizers'}/>)
            }}>Ionizers</Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Distillation'}/>)
            }}>Distillation</Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Ceramic'}/>)
            }}>Ceramic
            </Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Osmosis'}/>)
            }}>Osmosis</Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Ionizers'}/>)
            }}>Ionizers</Button>
            </li>
            <li>
            <Button onClick={()=>{
              SetData(<ProductList Category={'Distillation'}/>)
            }}>Distillation</Button>
            </li>
            </ul>
            </div>
        </Col>

        <Col xs="12" sm="6" lg="10" md="8" className="product-list-col" ref={containerRef} >
          <div className='Products_List'>
          {data}
          </div>
        </Col>
        </Row>
      </Container>
    </section>
    
  )
}

export default Store