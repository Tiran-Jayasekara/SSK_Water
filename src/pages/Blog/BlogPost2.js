import React from "react";
import "./Blog.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import mesher from "../../assests/images/blog/ph.jpg";

const BlogPost2 = () => {
  return (
    <>
      <Row>
        <Col className="BlogPost1_header" xs={{ span: 20 }} lg={{ span: 16 }}>
          <h1>
            <span className="black-text-blog">
              {" "}
              Ensuring Safe and Healthy Drinking Water
            </span>
            in Sri Lanka: Understanding the Measurement Standards
          </h1>
        </Col>
        <Col className="blog1Image" xs={{ span: 20 }} lg={{ span: 20 }}>
          <img className="BlogPost1headerimg" src={mesher} alt="" />
        </Col>

        <Col className="blog1Para" xs={{ span: 20 }} lg={{ span: 20 }}>
          <h6>Physical Parameters</h6>
          <p>
            Physical parameters are the measurable characteristics of water that
            provide insights into its visual appearance and physical properties.
            Some essential physical parameters include color, odor, and
            turbidity.<br></br>

            <b>a. Color:</b>  Clean drinking water should ideally be
            colorless or have a faint hue. Any unusual coloration may indicate
            the presence of contaminants or dissolved substances. <br></br> 
            <b>b. Odor:</b> Odorless water is considered the norm for drinking purposes. The
            presence of a strong or unpleasant smell may suggest the presence of
            pollutants or bacterial growth. <br></br> 
            
            <b>c. Turbidity:</b> Turbidity refers to
            the cloudiness or haziness of water caused by suspended particles.
            Low turbidity levels ensure water clarity and indicate minimal
            contamination.<br></br> <br></br> 
          </p>

          <h6>Chemical Parameters</h6>
          <p>
            Chemical parameters evaluate the presence and concentration of
            various chemical substances in drinking water. These substances may
            include minerals, heavy metals, organic compounds, and disinfection
            by-products: <br></br>
            <b>a. pH Level:</b> The pH level measures the acidity or
            alkalinity of water. In Sri Lanka, the recommended pH range for
            drinking water is typically between 6.5 and 8.5.<br></br>

            <b>b. Total Dissolved Solids (TDS):</b> TDS represent the total amount of inorganic salts,
            minerals, and metals present in water. It is generally recommended
            that TDS levels in drinking water should not exceed 500 milligrams
            per liter (mg/L). <br></br>
            <b>c. Heavy Metals:</b> Certain heavy metals, such as
            lead, arsenic, and cadmium, pose serious health risks even in small
            quantities. The permissible limits for heavy metals in drinking
            water are strictly regulated and enforced in Sri Lanka. <br></br> <br></br> 
          </p>

          <h6>Microbiological Parameters</h6>
          <p>
            Microbiological parameters help determine the presence of
            microorganisms, including bacteria, viruses, and parasites, which
            can cause waterborne diseases: <br></br> 
            <b>a. Coliform Bacteria:</b> The presence of
            coliform bacteria in drinking water suggests contamination from
            fecal matter and potential disease-causing microorganisms. The
            permissible limit for coliform bacteria in Sri Lanka is zero. <br></br> 

            <b>b. Escherichia coli (E. coli):</b> E. coli is a bacterium found in the
            intestines of humans and animals. Its presence in drinking water
            indicates contamination by fecal matter, and its absence is crucial
            for ensuring water safety. <br></br> <br></br> 
          </p>

          <h6>Standards and Regulations</h6>
          <p>
            In Sri Lanka, the National Water Supply and Drainage Board (NWSDB)
            is responsible for setting standards and guidelines for drinking
            water quality. They adhere to the World Health Organization (WHO)
            guidelines and continuously monitor water quality across the
            country. The NWSDB conducts regular testing and imposes strict
            penalties for non-compliance. <br></br> <br></br> 
          </p>

        </Col>
      </Row>
      <Row>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost1" className="nav-links">
              <Button>Previous</Button>
            </Link>
          </div>
        </Col>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/Blog" className="nav-links">
              <Button>Home</Button>
            </Link>
          </div>
        </Col>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost3" className="nav-links">
              <Button>Next</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost2;
