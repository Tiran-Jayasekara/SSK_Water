import React, { useEffect } from "react";
import "./Cards.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

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
      duration: 2000,
      distance: "50px",
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
                    <h4>Purchase</h4>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-paragraph"
                  >
                    Purchase-Click on our store page to view prices for
                    purchases.
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
                    Service-Within 72 hours of ordering the products, we will
                    bring them and install them free of
                    charge.
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
                    Maintain -Free maintenance services are provided during the
                    warranty period.
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
  );
}

export default Cards;
