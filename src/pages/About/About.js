import React from "react";
import { useState } from 'react';
import { Col, Row , Select , Button} from 'antd';
import "./about.css";
import directer from '../../assests/images/man.png'
import thanks from '../../assests/images/thanks.jpg'
import about from '../../assests/images/contactus-banner.jpg'


const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];


const About = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));


  return (
    <>
    <Row gutter={[16,16]}>
    <Col xs={{ span: 24, }} lg={{ span: 24 }}>
      <img src={about} alt="about" style={{ maxWidth: '100%', height: 'auto' }}></img>
    </Col>

    <Col className="about_h1" xs={{ span: 22,}} lg={{ span: 22,}}>
     <h1 >THE COMPANY - A DYNAMIC PROFILE </h1>
    </Col>

    <Col className="about_p" xs={{span: 22}} lg={{span: 22}}>
     <p><b>Lalanka Water Management (Pvt) Ltd,</b> incorporated as a specialist and a consultant to the Water Treatment Activities, was founded in Sri Lanka in 2000 with a group of well qualified and well experienced personnel to serve the growing needs of the industrial sector for water management and to improve the standard of recreation of the hard working people after work or whilst at work.</p>
     
     <p><b></b>Over the period of years, the changing technology and the needs of the customers induced Lalanka to expand its services to designs, manufacture and installation of water and wastewater treatment systems for a wide range of applications and laboratory services on water analysis.</p>
     <p><b>Lalanka</b> is in the forefront of this field now and is island wide with its extensive sales network to meet customer needs better. Our customers comprise of a wide range of companies from small office to large multinational companies of various industries as well as individuals from small businessmen to chief executive of group of companies, each with its unique needs and requirements.</p>
     <p><b>Lalanka</b> has carved a niche for itself in a distinctive market, even with a less number of years of experience in the field of business. We not only design and construct swimming pools or design and manufacture water treatment equipment tailored to meet our clients’ individual needs but also provide a fast, reliable and efficient backup service.</p>
     <p><b>Lalanka</b> can also provide pragmatic consultation, customer oriented equipment and systems, quality products, effective chemicals, reliable laboratory and maintenance services that can help to solve environmental problems.</p>
     <p>We at <b>Lalanka Group,</b> is probably one of the few local companies that offer a comprehensive maintenance service package to all types of needs in its field.</p>
    </Col>

    <Col className="bordofdirecter" xs={{ span: 22,}} lg={{ span: 22,}}>
     <h1 >BOARD OF DIRECTORS</h1>
    </Col>

    <Col className="directer1" xs={{ span: 22 }} sm={{ span: 10 }} lg={{ span: 10, }}>
      <h5>Managing Director<br></br>
        Mr. Sagara Lunuwila<br></br>
        B Sc. PGD in Architecture</h5>
      <img src={directer} alt="directer" style={{ maxWidth: '100%', height: 'auto' }}></img>
    </Col>
    <Col className="directer2" xs={{ span: 22 }} sm={{ span: 10 }} lg={{ span: 10, }}>
    <h5>Managing Director<br></br>
        Mr. Sagara Lunuwila<br></br>
        B Sc. PGD in Architecture</h5>
      <img src={directer} alt="directer" style={{ maxWidth: '100%', height: 'auto' }}></img>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 22 }} lg={{ span: 12}}>
      <h1>OUR PHILOSOPHY</h1>
      <p>We use all our resources to provide a state of peace of mind for our customers whilst
      protecting and preserving our nature and environment.</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 22 }} lg={{ span: 22}}>
      <h1>OUR VISION</h1>
      <p>“To be the leading contributor of providing solutions for water related
      environmental issues in Sri Lanka”</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 22 }} lg={{ span: 22}}>
      <h1>OUR MISSION</h1>
      <p>We use all our resources to provide a state of peace of mind for our customers whilst
      protecting and preserving our nature and environment.</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 22}}>
      <h1>OUR COMMITMENT</h1>
      
    </Col>

    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>
    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>

    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>

    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>

    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>

    <Col className="Message" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 10}}>
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
    </Col>

    <Col className="button" xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 12}}>
    <Button type="primary" block>
      Send
    </Button>
    </Col>


    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>OUR CAPABILITIES</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>RESEARCH & DEVELOPMENT</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>ON SITE CONSULTATION & MANAGEMENT</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>DESIGN FOR COST EFFECTIVENESS</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>QUALITY CONTROL</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col className="Philosophy" xs={{ span: 20 }} sm={{ span: 20 }} lg={{ span: 16}}>
      <h1>AFTER SALES SERVICE</h1>
      <p>It is not a trial or an error, but precise thought that Lalanka has build up a high level of technological expertise and experience through our successful engagements in
      numerous projects over the years. The accumulation and consolidation of our expertise and experience is the foundation upon which our reputation and commitment is
      finally established</p>
    </Col>

    <Col xs={{ span: 24, }} lg={{ span: 24, }}>
      <img src={thanks} alt="thanks" style={{ maxWidth: '100%', height: 'auto' }}></img>
    </Col>

  </Row>
  </>
  );
};

export default About;