import React ,{useEffect} from "react";
import "./Cards.css";
import { Col, Row } from "antd";
import CardItem from "./CardItem";
// import service1 from "../../assests/images/Service/service1.jpg";
// import service2 from "../../assests/images/Service/service2.jpg";
import service3 from "../../assests/images/Service/service3.jpg";
import service4 from "../../assests/images/Service/service4.jpg";
import service5 from "../../assests/images/Service/service1.jpg";
import ScrollReveal from "scrollreveal";

function Cards() {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 3000,
      distance: "100px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);
  return (
    <>
      <div className="cards_background revealElement">
        <Row gutter={0}>
          <Col
            className="cards_header revealElement"
            xs={{ span: 22 }}
            sm={{ span: 22 }}
            lg={{ span: 22 }}
          >
            <h1>Maintaining And Services!</h1>
          </Col>
        </Row>


        <Row className="cards_col_2 revealElement" gutter={0} justify="center">
          <Col lg={{ span: 4 }} xs={{ span: 2 }}></Col>

          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 9 }}
          >
            <CardItem
              src={service4}
              text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
              label="Filter cartridges Installation"
              path="/store"
            />
          </Col>

          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20 ,offset: 2}}
            sm={{ span: 20 ,offset: 2 }}
            lg={{ span: 8 ,offset: 9}}
          >
            <CardItem
              src={service5}
              text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
              label="Filter cartridges Installation"
              path="/store"
            />
          </Col>
          <Col lg={{ span: 4 }} xs={{ span: 2 }}></Col>
        </Row>
        <Col className="space"></Col>



        {/* card set 2 */}
        
        <Row className="cards_col_2 revealElement" gutter={0} justify="center">
          <Col lg={{ span: 3 }} xs={{ span: 20 }}></Col>
          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            lg={{ span: 6, offset: 9 }}
          >
            <CardItem
              src={service3}
              text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
              label="Purifier"
              path="/store"
            />
          </Col>
          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            lg={{ span: 6, offset: 9 }}
          >
            <CardItem
              src={service4}
              text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
              label="Filter cartridges Installation"
              path="/store"
            />
          </Col>

          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 6 }}
          >
            <CardItem
              src={service5}
              text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
              label="Filter cartridges Installation"
              path="/store"
            />
          </Col>
          <Col lg={{ span: 3 }} xs={{ span: 20 }}></Col>
        </Row>
      </div>
    </>

    // <div className="cards">
    //   <h1>Maintaining And Services!</h1>
    //   <div className="cards__container">
    //     <div className="cards__wrapper">
    //       <ul className="cards__items">
    //  <CardItem
    //     src={service1}
    //     text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
    //     label="Purifier"
    //     path="/store"
    //   />
    //   <CardItem
    //     src={service2}
    //     text="Our Whole Home Water Filtration System helps to remove some of the impurities in the water your family drinks, washes and cooks with"
    //     label="Filter cartridges Installation"
    //     path="/store"
    //   />
    //       </ul>
    //       <ul className="cards__items">
    //         <CardItem
    //           src={service3}
    //           text="Our Whole Home Water Filtration System helps "
    //           label="Water purification Reverse"
    //           path="/store"
    //         />
    //         <CardItem
    //           src={service4}
    //           text="Our Whole Home Water Filtration System helps "
    //           label="Home Filters"
    //           path="/store"
    //         />
    //         <CardItem
    //           src={service5}
    //           text="Our Whole Home Water Filtration System helps "
    //           label="Industrial"
    //           path="/store"
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Cards;
