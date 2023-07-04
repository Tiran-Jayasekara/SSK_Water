import React, { useEffect } from "react";
import "./Cards.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
// import service1 from "../../assests/images/Service/service1.jpg";
// import service2 from "../../assests/images/Service/service2.jpg";
import service3 from "../../assests/images/Service/service3.jpg";
import service4 from "../../assests/images/Service/service4.jpg";
import service5 from "../../assests/images/Service/service1.jpg";
import ScrollReveal from "scrollreveal";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
            xs={{ span: 20 }}
            sm={{ span: 22 }}
            lg={{ span: 22 }}
          >
            <h1>
              <span className="black-text3">Maintaining</span> And Services!
            </h1>
          </Col>
        </Row>
        <Col className="space"></Col>

        {/* card set 2 */}

        <Row className="cards_col_2 revealElement">
          <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 3 }}></Col>
          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 6 }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={service3}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-heading"
                  >
                    <h4>Selling</h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/store">
                  <Button size="small" color="primary">
                    Store
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 6 }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={service4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-heading"
                  >
                    <h4>Maintain</h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/contact">
                  <Button size="small" color="primary">
                    contact
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col
            className="cards_col_1 revealElement"
            xs={{ span: 20 }}
            sm={{ span: 20 }}
            lg={{ span: 6 }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={service5}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-heading"
                  >
                    <h4>Service</h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/About">
                  <Button size="small" color="primary">
                    About Us
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 3 }}></Col>
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
