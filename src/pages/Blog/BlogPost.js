import React from "react";
import "./Blog.css";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";


import mesher from "../../assests/images/blog/benifit.jpg";

const BlogPost = () => {
  return (
    <>
      <Row>
        <Col className="BlogPost1_header" xs={{ span: 20 }} lg={{ span: 16 }}>
          <h1>
            Benifits of
            <span className="black-text-blog"> Water</span>
          </h1>
        </Col>
        <Col className="blog1Image" xs={{ span: 20 }} lg={{ span: 20 }}>
          <img className="BlogPost1headerimg" src={mesher} alt="" />
        </Col>

        <Col className="blog1Para" xs={{ span: 20 }} lg={{ span: 20 }}>
          <h6>Optimal Physical Performance</h6>
          <p>
            Staying properly hydrated is essential for maximizing physical
            performance. Water acts as a lubricant for our joints, regulates
            body temperature, and helps deliver nutrients to our muscles. When
            we exercise or engage in physical activities, it becomes even more
            crucial to replenish our fluid levels to avoid dehydration, which
            can lead to fatigue, muscle cramps, and reduced endurance. By
            maintaining adequate hydration, we can enhance our performance,
            endurance, and overall athletic abilities.<br></br> <br></br> 
          </p>

          <h6>Promotes Digestive Health</h6>
          <p>
            Drinking enough water is vital for maintaining a healthy digestive
            system. It aids in the digestion and absorption of nutrients,
            prevents constipation, and supports bowel regularity. Water also
            helps break down food, enabling the body to extract essential
            vitamins, minerals, and energy more efficiently. By incorporating
            adequate hydration into our daily routine, we can ensure a smooth
            and efficient digestive process, leading to improved overall health.<br></br> <br></br> 
          </p>

          <h6>Weight Management</h6>
          <p>
            If you're striving for a healthy weight, water can be your best
            ally. Often mistaken for hunger, thirst can lead to unnecessary
            snacking and overeating. By drinking water before meals, you can
            help reduce calorie intake and promote a feeling of fullness.
            Additionally, water has zero calories and can be a satisfying
            substitute for high-calorie beverages like sugary sodas and juices.
            By making water your beverage of choice, you can support your weight
            management goals and maintain a healthier lifestyle.<br></br> <br></br> 
          </p>

          <h6>Enhances Brain Function</h6>
          <p>
            Proper hydration is essential for optimal brain function. Studies
            have shown that even mild dehydration can impair cognitive
            performance, including concentration, alertness, and short-term
            memory. By staying hydrated, you can improve your focus, mental
            clarity, and overall cognitive abilities. So, the next time you're
            feeling mentally fatigued, reach for a glass of water to give your
            brain the boost it needs.<br></br> <br></br> 
          </p>

          <h6>Supports Skin Health</h6>
          <p>
            Water plays a crucial role in maintaining healthy and radiant skin.
            It helps to moisturize the skin, promote elasticity, and flush out
            toxins that can contribute to acne and other skin issues. By
            drinking enough water, you can keep your skin hydrated, reduce the
            appearance of wrinkles, and achieve a more youthful complexion.
            Remember, hydrating your body from the inside is just as important
            as applying moisturizers externally.<br></br> <br></br> 
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="blog1Buttons" xs={{ span: 5 }} lg={{ span: 8 }}>
          <div className="button_container">
            <Link to="/BlogPost4" className="nav-links">
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
            <Link to="/BlogPost2" className="nav-links">
              <Button>Next</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost;
