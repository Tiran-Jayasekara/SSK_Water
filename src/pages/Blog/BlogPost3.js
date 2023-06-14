import React from "react";
import "./Blog.css";
import { Col, Row,Button } from "antd";
import { Link } from 'react-router-dom';

import lanka from "../../assests/images/blog/lanka.png";

const BlogPost3 = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className="BlogPost1_header" xs={{ span: 20 }} lg={{ span: 16 }}>
          <h1>What are the disease occur from water in Sri Lanka?</h1>
        </Col>
        <Col className="blog1Image" xs={{ span: 20 }} lg={{ span: 20 }}>
          <img className="BlogPost1headerimg" src={lanka} alt="" />
        </Col>

        <Col className="blog1Para" xs={{ span: 20 }} lg={{ span: 20 }}>
          <p>
            When it comes to addressing biases and stereotypes can be achieved
            through awareness and education around diversity and inclusion
            issues. Companies can establish committees or task forces to
            identify and address areas where bias or stereotypes may be present.
            Promoting a culture of inclusion requires open communication,
            collaboration, and respect among all employees, regardless of their
            backgrounds or identities. Providing training programs and workshops
            can help employees develop skills and knowledge related to diversity
            and inclusion.
          </p>
          <p>
            It takes a lot of time for a farmer to complete one task on his
            farm. For example, it takes a long time for a farmer to provide
            water for his plants. Then he has very little time to spend on the
            rest of the work on the farm. His income decreases as efficiency
            decreases. There is no way to quickly become aware of an emergency.
            For example , in the event of a fire, such as a disaster on the
            farm, there is no safety system in place to quickly alert and
            minimize the disaster. The loss to the farm due to the inability to
            know such a disaster situation is immense. There is no way to even
            know about a person or animal that is trespassing on the farm at
            night. For this reason, the security of the farm is very low.
          </p>
          <p>
            To truly embrace diversity and inclusion, companies must make a
            conscious effort to recruit and retain diverse talent. This can be
            achieved by targeting recruitment efforts towards underrepresented
            groups, offering mentorship and support programs for employees from
            diverse backgrounds, and providing opportunities for professional
            development and career advancement. Building partnerships and
            networks with organizations and individuals who are committed to
            promoting these values is also a crucial strategy. Finally,
            supporting diversity in leadership positions is essential. Companies
            can establish policies and practices that promote diversity in
            hiring and promotion decisions, as well as offer leadership
            development programs for employees from diverse backgrounds.
          </p>
          <p>
            In order to benefit from a diverse workforce's improved innovation
            and creativity as well as greater market insights, our organization,
            which is a part of the Asia Pacific region, is adopting these ideas.
            Even though there has been recent progress, there is still much to
            be done to develop an industry that is really inclusive and
            egalitarian. We can develop a more thriving and prosperous
            agriculture economy in the Asia Pacific area by putting these
            principles into practice and continuing to work toward improvement.
          </p>
        </Col>

  <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
  <div className="button_container" >
        <Link to='/BlogPost2' className='nav-links'>
              <Button>Previous</Button>
        </Link>
  </div>
</Col>
<Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
  <div className="button_container" >
      <Link to='/Blog' className='nav-links'>
              <Button>Home</Button>
      </Link>
  </div>
</Col>
<Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
  <div className="button_container">
      <Link to='/BlogPost4' className='nav-links'>
              <Button>Next</Button>
      </Link>
  </div>
</Col>
</Row>
    </>
  );
};

export default BlogPost3;
