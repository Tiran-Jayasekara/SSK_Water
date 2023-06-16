import React, { useRef, useState } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import service1 from "../../assests/images/Service/phone.jpg";
import service2 from "../../assests/images/Service/service2.jpg";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import banner from "../../assests/images/contactus-banner.jpg";
import emailjs from "emailjs-com";

import { Card, Col, Row } from "antd";
const { Meta } = Card;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (form.name.trim() === "" || form.email.trim() === "") {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Check if the message field is empty
    if (form.message.trim() === "") {
      // Do not send the message if it's empty
      alert("Message field is empty. Please enter a message.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_fqrxcph",
        "template_260471a",
        {
          from_name: form.name,
          to_name: "SSK Water Filters Technology",
          from_email: form.email,
          to_email: "sskwaterfilters96@gmail.com",
          message: form.message,
        },
        "LO1v1GenOPxy5VzGy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setErrorMessage("");
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Row>
        <Col className="" xs={{ span: 24 }} lg={{ span: 24 }}>
          <div className="banner-container">
            <h1>Contact Us</h1>

            <img src={banner} alt="" />
          </div>
        </Col>
        <Col
          className="GetIn_Touch"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <h1>GET IN TOUCH WITH US</h1>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 4 }} lg={{ span: 4 }}></Col>
        <Col
          className="Contact_Cards"
          xs={{ span: 22 }}
          sm={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main1"
            hoverable
            cover={
              <img
                alt="example"
                src={service1}
                style={{ borderRadius: "20px" }}
              />
            }
            actions={[
              <a href="tel:YOUR_PHONE_NUMBER">
                <PhoneOutlined style={{ fontSize: "34px" }} />
              </a>,
              <a href="mailto:sskwaterfilters96@gmail.com">
                <MailOutlined style={{ fontSize: "34px" }} />
              </a>,
              <a
                href="https://api.whatsapp.com/send?phone=YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppOutlined style={{ fontSize: "34px" }} />
              </a>,
            ]}
          >
            <Meta title="QUICK CONTACT" />
          </Card>
        </Col>
        <Col
          className="Contact_Cards"
          xs={{ span: 22 }}
          sm={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main2"
            hoverable
            cover={
              <img
                alt="example"
                src={service2}
                style={{ borderRadius: "20px" }}
              />
            }
          >
            <Meta
              title="CUSTOMER SERVICES"
              description={
                <>
                  <div>
                    <h5>Reliable and very fast service within 24 hours.</h5>
                  </div>
                </>
              }
            />
          </Card>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 4 }} lg={{ span: 4 }}></Col>

        <Col
          className="Contact_us"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <h1>CONTACT US</h1>
        </Col>

        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
        <Col
          className="contsct_para"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 16 }}
        >
          <p>
            SSK Water Filter Technology is always here to assist with your
            queries and solve your problems. Contact us through this short form,
            and we are committed to your service. <br></br>
          </p>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>

        <Col
          className="centered"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
              />
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button type="submit">{loading ? "Sending..." : "Send"}</button>
          </form>
        </Col>
        <Footer />
      </Row>
    </>
  );
};

export default Contact;
