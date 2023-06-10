import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import ProductList from './ProductList';
import './Store.css';
import domestic from '../../assests/images/Filter/domestic.png';
import com from '../../assests/images/Filter/com.png';
import ind from '../../assests/images/Filter/ind.png';
import ion from '../../assests/images/Filter/ion.png';
import spare from '../../assests/images/Filter/spare.png';
import Footer from "../../components/Footer/Footer";
import ChooseUs from '../../components/Choose-us/ChooseUs';
import Testimonials from '../../components/Testimonial/Testimonials';


function Store() {

  const [data , SetData] = useState([
    <ProductList Category={'Domestic'}/>
]);
const containerRef = useRef(null);

useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollTop = 0;
  }
}, [data]);

  return (
  <>
  <Container className="Container-custom2">
  <Row className="product-buttons-row">
    <Col lg="3" sm ="12" xs="12" className="my-col">
      <div className="Product_NavBar">
        <ul className="d-flex">
          <li>
    
            <img  src={domestic} alt="Domestic Icon" className="button-icon" onClick={() => { SetData(<ProductList Category={'Domestic'} />) }} />
            <h5>Domestic RO</h5>

          </li>
          <li>
   
            <img  src={com} alt="Domestic Icon" className="button-icon" onClick={() => { SetData(<ProductList Category={'Commercial'} />) }} />
            <h5>Commercial RO</h5>
          </li>
          <li>
           

            <img  src={ind} alt="Industrial" className="button-icon" onClick={() => { SetData(<ProductList Category={'Industrial'} />) }} />
            <h5>Industrial RO</h5>
          </li>
          <li>
        

            <img  src={ion} alt="Industrial" className="button-icon" onClick={() => { SetData(<ProductList Category={'Ionizer'} />) }} />
            <h5>Ionizer Machine</h5>
          </li>
          <li>
         

            <img  src={spare} alt="Industrial" className="button-icon" onClick={() => { SetData(<ProductList Category={'Spare'} />) }} />
            <h5>Spare Parts</h5>
          </li>
        </ul>
      </div>
    </Col>
    <Col lg="9" sm = "12" xs="12">
      <div className="Products_List">
        {data}
      </div>
    </Col>
  </Row>
</Container>
<div className="container-divider"></div>
<Container>
  <Testimonials/>
</Container>
   
</>
  )
}

export default Store