import React, { useRef, useState , useEffect } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import getintouch from "../../assests/images/contact/getintouch.jpg";
import service2 from "../../assests/images/contact/customer.jpg";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import banner from "../../assests/images/contact/contact.jpg";
import emailjs from "emailjs-com";
import ScrollReveal from "scrollreveal";

import { Card, Col, Row } from "antd";


const Contact = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 2000,
      distance: "50px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

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
        <Col xs={{ span: 24 }}  sm={{ span: 24 }} lg={{ span: 24 }}>
          <div className="banner-container">
            {/* <h1>Contact Us</h1> */}

            <img src={banner} alt="contactBanner" />
          </div>
        </Col>
        <Col
          className="GetIn_Touch revealElement"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
        >
          <h1>
              <span className="black-text-contact">Get In Touch</span> With Us
            </h1>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 0 }} lg={{ span: 4 }}></Col>
        <Col
          className="Contact_Cards revealElement"
          xs={{ span: 22 }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main1 revealElement"
            hoverable
            cover={
              <img
                alt="example"
                src={getintouch}
                style={{ borderRadius: "20px" }}
              />
            }
            actions={[
              <a href="tel:0714055143">
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
            <h2 className="contact_h2">Quick Contact</h2>
          </Card>
        </Col>
        <Col
          className="Contact_Cards revealElement"
          xs={{ span: 22 }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <Card
            className="card_main2 revealElement"
            hoverable
            cover={
              <img
                alt="example"
                src={service2}
                style={{ borderRadius: "20px" }}
              />
            }
          >
            <h2 className="contact_h2">Customer Service</h2>
            <h4 className="contact_h4">Reliable and very fast service within 24 hours.</h4>
          </Card>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 0 }} lg={{ span: 4 }}></Col>

        <Col xs={{ span: 22 }} sm={{ span: 2 }} lg={{ span: 4 }}></Col>
        <Col
          className="contsct_para revealElement"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 6 }}
        >
          <h1>Contact Us</h1>
          <p>
            SSK Water Filter Technology is always here to assist with your
            queries and solve your problems. Contact us through this short form,
            and we are committed to your service. <br></br>
          </p>
        </Col>
        

        <Col
          className="centered revealElement"
          xs={{ span: 20 }}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form revealElement">
            <div className="form-field ">
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
            <div className="form-field ">
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
            <div className="form-field ">
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
        <Col xs={{ span: 22 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
        <Footer />
      </Row>
    </>
  );
};

export default Contact;
