import { Col, Row } from "antd";
import React from "react";
import "./Policy.css";

function Policy() {
  return (
    <>
      <Row className="backColor" >
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>

        <Col
          className="Policy_Header"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 18 }}
        >
          <h1>Privacy Policy</h1>
          <p>Last modified: January 26, 2021</p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>
    </Row>

    <Row className="backColor">
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>

        <Col
          className="Policy_Header"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 18 }}
        >
          <h3>Introduction</h3>
          <p>
            GMi Companies, Inc. (“Company” or “We”) respects your privacy and is
            committed to protecting it through compliance with this Privacy
            Policy (“Policy”). This Policy describes the types of information we
            may collect from you or that you may provide when you visit the
            website www.gmicompanies.com, www.ghent.com,
            www.waddellfurniture.com, and www.vividboard.com (collectively, our
            “Websites” or the “Website”) and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
            This Policy applies to information we collect: On this Website,
            which includes the other websites operated by Company and any of our
            brands (Ghent, Waddell, and VividBoard); In email, text, and other
            electronic messages between you and this Website. It does not apply
            to information collected by: Us offline or through any other means;
            or Any third party, including through any application or content
            (including advertising) that may link to or be accessible from or on
            the Website. Please read this Policy carefully to understand our
            policies and practices regarding your information and how we will
            treat it. If you do not agree with our policies and practices, your
            choice is not to use our Website. By accessing or using this
            Website, you agree to this Policy. This Policy may change from time
            to time (see Changes to Our Privacy Policy). Your continued use of
            this Website after we make changes is deemed to be acceptance of
            those changes, so please check the Policy periodically for updates.
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>

        <Col
          className="Policy_Header"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 18 }}
        >
          <h3>Information You Provide to Us. </h3>
          <p>
            The information we collect on or through our Website may include:
            Information that you provide by filling in forms on our Website.
            This includes information provided at the time of registering to use
            our Website, subscribing to our service, or requesting further
            services. We may also ask you for information when you report a
            problem with our Website. Records and copies of your correspondence
            (including email addresses), if you contact us. Details of
            transactions you carry out through our Website and of the
            fulfillment of your orders. You may be required to provide financial
            information before placing an order through our Website. Your search
            queries on the Website. Other information and specifications
            provided through our product builder. You also may provide
            information to be published or displayed (hereinafter, “posted”) on
            public areas of the Website, or transmitted to other users of the
            Website or third parties (collectively, “User Contributions”). Your
            User Contributions are posted on the Website and transmitted to
            others at your own risk. Although we limit access to certain pages,
            please be aware that no security measures are perfect or
            impenetrable. Additionally, we cannot control the actions of other
            users of the Website with whom you may choose to share your User
            Contributions. Therefore, we cannot and do not guarantee that your
            User Contributions will not be viewed by unauthorized persons.
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 3 }}></Col>
      </Row>
    </>
  );
}
export default Policy;
