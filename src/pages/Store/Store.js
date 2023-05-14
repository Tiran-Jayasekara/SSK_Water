import React, { useState } from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import ProductList from './ProductList';
import './Store.css'

function Store() {

  const [data , SetData] = useState([
    <ProductList Category={'Osmosis'}/>
]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" style={{width: "20%"}}>
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

        <Col lg="10" md="10" style={{width: "80%" , height: '550px', overflowY: 'scroll'}} >
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