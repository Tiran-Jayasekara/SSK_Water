import "./Store.css";
import { Modal, Button, Space, Row, Col } from "antd";
import { useState, useRef, useEffect } from "react";
import cruze from "../../assests/images/Filter/cruze/cruze.png";
import cruze1 from "../../assests/images/Filter/cruze/cruze.jpg";
import cruze2 from "../../assests/images/Filter/cruze/cruze2.jpg";
import cruze3 from "../../assests/images/Filter/cruze/cruze3.jpg";

import aqua from "../../assests/images/Filter/Aqua/aqua.jpg";
import aqua1 from "../../assests/images/Filter/Aqua/aqua1.jpg";
import aqua2 from "../../assests/images/Filter/Aqua/aqua2.jpg";

import smartRO1 from "../../assests/images/Filter/smartRO/1.png";
import smartRO2 from "../../assests/images/Filter/smartRO/2.png";
import smartRO3 from "../../assests/images/Filter/smartRO/3.png";
import smartRO4 from "../../assests/images/Filter/smartRO/4.png";

import stage1 from "../../assests/images/Filter/3stage/3stage4.jpg";
import stage2 from "../../assests/images/Filter/3stage/3stage5.jpg";
import stage3 from "../../assests/images/Filter/3stage/3stage11.jpg";
import stage from "../../assests/images/Filter/domestic.png";

import com2 from "../../assests/images/Filter/Commercial/com.png";
import indu1 from "../../assests/images/Filter/Commercial/1.jpg";
import indu2 from "../../assests/images/Filter/Commercial/2.jpg";
import indu3 from "../../assests/images/Filter/Commercial/3.jpg";
import indu4 from "../../assests/images/Filter/Commercial/4.png";

import industrial from "../../assests/images/Filter/industrial/1.png";
import industrial1 from "../../assests/images/Filter/industrial/1.jpg";
import industrial2 from "../../assests/images/Filter/industrial/2.jpg";
import industrial3 from "../../assests/images/Filter/industrial/3.jpg";
import industrial4 from "../../assests/images/Filter/industrial/4.jpg";
import industri from "../../assests/images/Filter/industrial/industrial.png";

import hot1 from "../../assests/images/Filter/heron/1.jpg";
import hot5 from "../../assests/images/Filter/heron/11.jpg";
import hot2 from "../../assests/images/Filter/heron/2.jpg";
import hot3 from "../../assests/images/Filter/heron/3.jpg";
import hot4 from "../../assests/images/Filter/heron/4.jpg";

import spare1 from "../../assests/images/spare/1.png";
import spare2 from "../../assests/images/spare/2.png";
import spare3 from "../../assests/images/spare/3.png";
import spare4 from "../../assests/images/spare/4.png";
import spare5 from "../../assests/images/spare/5.png";
import spare6 from "../../assests/images/spare/6.png";
import spare7 from "../../assests/images/spare/7.png";
import spare8 from "../../assests/images/spare/8.png";
import spare9 from "../../assests/images/spare/9.png";
import spare10 from "../../assests/images/spare/10.png";
import spare11 from "../../assests/images/spare/11.png";

import ionizer from "../../assests/images/Filter/ionizer/1.png";

import emailjs from "emailjs-com";
import ScrollReveal from "scrollreveal";

// import { red } from "@material-ui/core/colors";
// import domestic2 from "../../assests/images/store/domestic/2.jpg";
// import domestic3 from "../../assests/images/store/domestic/3.jpg";
// import domestic4 from "../../assests/images/store/domestic/4.jpg";

function ProductList(props) {
  const [checkboxValues, setCheckboxValues] = useState({
    buy: false,
    getInfo: false,
  });

  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Example array of books

  const imageClick = (product) => {
    setDisplay({
      id: product.id,
      title: product.title,
      author: product.author,
      brand: product.brand,
      price: product.price,
      price1: product.price1,
      price2: product.price2,
      price3: product.price3,
      price4: product.price4,
      application: product.application,
      installation: product.installation,
      waterTank: product.waterTank,
      feature: product.feature,
      stages: product.stages,
      technology: product.technology,
      Warranty: product.Warranty,
      FiltrationCapacity: product.FiltrationCapacity,
      image: product.image,
      image1: product.image1,
      image2: product.image2,
      image3: product.image3,
      image4: product.image4,
      Sinhala_describe: product.Sinhala_describe,
      English_describe: product.English_describe,
    });
    setSelectedImage(product.image);
    setIsModalVisible(true);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);
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
    if (form.name.trim() === "" || form.mobile.trim() === "") {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Check if the message field is empty
    // if (form.message.trim() === "") {
    //   // Do not send the message if it's empty
    //   alert("Message field is empty. Please enter a message.");
    //   return;
    // }

    setLoading(true);

    emailjs
      .send(
        "service_fqrxcph",
        "template_260471a",
        {
          from_name: form.name,
          to_name: "SSK Water Filters Technology",
          from_email: form.mobile,
          to_email: "sskwaterfilters96@gmail.com",
          id: display.id,
          title: display.title,
          author: display.author,
          price: display.price,
          number: form.mobile,
          buy: checkboxValues.buy ? "Buy" : "Not Selected",
          getInfo: checkboxValues.getInfo ? "Get Info" : "Not Selected",
        },
        "LO1v1GenOPxy5VzGy"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you. we will get back to you as soon as possible. බොහොම ස්තූතියි . ඔබගේ පණිවිඩය අපට ලැබුණා. අප ආයතනයෙන් හැකි ඉක්මනින් ඔබට ඇමතුමක් ලබා දෙනු ඇත."
          );
          handleCancel1();

          setForm({
            name: "",
            mobile: "",
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

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const [display, setDisplay] = useState({});
  const [selectedImage, setSelectedImage] = useState(display.image);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  let productList;

  switch (props.Category) {
    case "Domestic":
      productList = Domestic;
      break;
    case "Commercial":
      productList = Commercial;
      break;
    case "Ionizer":
      productList = Ionizer;
      break;
    case "Spare":
      productList = Spare;
      break;
    default:
      productList = Industrial;
  }

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 1000,
      distance: "100px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

  return (
    <div className="product_main">
      {productList
        .reduce(
          (rows, product, index) =>
            index % 3 === 0
              ? rows.concat([[product]])
              : (rows[rows.length - 1].push(product), rows),
          []
        )
        .map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((product, productIndex) => (
              <Col
                key={product.id}
                className="Store_product_List "
                xs={{ span: 24 }}
                sm={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <div
                  className={`product-container ${
                    productIndex === 0 ? "first-product" : ""
                  }`}
                  onClick={() => imageClick(product)}
                >


                  {product.id > 54 ? ( // Conditionally show the image
                  <>
                  <h5 className="product-title ">{product.title}</h5>
                  
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                  </>
                  
                  ) : (
                    <>
                    <h5 className="product-title ">{product.title}</h5>
                  <div className="product-details ">
                    <p className="product-price ">RS : {product.price}</p>
                  </div>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                    </>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        ))}

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        width={600}
        style={{
          textAlign: "center",
        }}
        footer={[
          <Button key="order" onClick={() => setIsModalVisible1(true)}>
            Next
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div className="modal-content">
          <Row>
            <Col
              className="modal_content_h1 "
              xs={{ span: 22 }}
              sm={{ span: 22 }}
              lg={{ span: 22 }}
            >
              <h1>{display.title}</h1>
            </Col>
            {/* <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}>
              <button className="close-button" onClick={handleCancel}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </Col> */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
              <Space direction="vertical">
                <div key={0} className="image-container ">
                  &nbsp;&nbsp;
                  <b>
                    <img
                      className="model_image zoomable-image"
                      src={selectedImage}
                      alt={display.title}
                    />
                  </b>
                </div>

                {display.id === 53 ? <></> : null}
                {display.id === 50 ? <></> : null}
                {display.id === 51 ? <></> : null}

                {display.id < 50 ? (
                  <Row className="model_smallImageList">
                    <Col
                      xs={{ span: 2 }}
                      sm={{ span: 2 }}
                      lg={{ span: 2 }}
                    ></Col>
                    <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                      <div
                        className="model_Small_List "
                        onClick={() => handleImageClick(display.image1)}
                        key={0}
                      >
                        &nbsp;&nbsp;
                        <b>
                          <img
                            className="model_image_small "
                            src={display.image1}
                            alt={display.title}
                          />
                        </b>
                      </div>
                    </Col>
                    <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                      <div
                        className="model_Small_List "
                        onClick={() => handleImageClick(display.image2)}
                        key={0}
                      >
                        &nbsp;&nbsp;
                        <b>
                          <img
                            className="model_image_small "
                            src={display.image2}
                            alt={display.title}
                          />
                        </b>
                      </div>
                    </Col>
                    <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                      <div
                        className="model_Small_List "
                        onClick={() => handleImageClick(display.image3)}
                        key={0}
                      >
                        &nbsp;&nbsp;
                        <b>
                          <img
                            className="model_image_small "
                            src={display.image3}
                            alt={display.title}
                          />
                        </b>
                      </div>
                    </Col>
                    <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                      <div
                        className="model_Small_List "
                        key={0}
                        onClick={() => handleImageClick(display.image4)}
                      >
                        &nbsp;&nbsp;
                        <b>
                          <img
                            className="model_image_small "
                            src={display.image4}
                            alt={display.title}
                          />
                        </b>
                      </div>
                    </Col>
                    <Col
                      xs={{ span: 2 }}
                      sm={{ span: 2 }}
                      lg={{ span: 2 }}
                    ></Col>
                  </Row>
                ) : null}

                <div className="model_about " key={1}>
                  {/* <h3>ABOUT</h3> */}

                  {display.id > 35 && display.id <= 39 ? (
                    <>
                      <h4>Brand : {display.brand}</h4>
                      <h4>Price : {display.price}</h4>
                    </>
                  ) : null}

                  {display.id >= 30 && display.id < 31 ? (
                    <div className="product_details">
                      <h4>Application : {display.application}</h4>
                      <h4>Installation Type : {display.installation}</h4>
                      <h4>Water Tank : {display.waterTank}</h4>
                      <h4>Stages : {display.stages}</h4>
                      <h4>Features : {display.technology}</h4>
                      <h4>Warranty : {display.Warranty}</h4>
                      <h4>
                        Filtration Capacity : {display.FiltrationCapacity}
                      </h4>
                      <h6>Price : RS {display.price}</h6>
                    </div>
                  ) : null}

                  {display.id > 50 && display.id < 52 ? <></> : null}

                  {display.id === 53 ? (
                    <div className="product_details">
                      <h4>Application : {display.application}</h4>
                      <h4>Installation Type : {display.installation}</h4>
                      <h4>Water Tank : {display.waterTank}</h4>
                      <h4>Features : {display.technology}</h4>
                      <h6>Price : RS {display.price}</h6>
                    </div>
                  ) : null}

                  {display.id < 28 ? (
                    <div className="product_details">
                      <h4>Application : {display.application}</h4>
                      <h4>Installation Type : {display.installation}</h4>
                      <h4>Water Tank : {display.waterTank}</h4>
                      <h4>Stages : {display.stages}</h4>
                      <h4>Features : {display.technology}</h4>
                      <h4>Warranty : {display.Warranty}</h4>
                      <h4>
                        Filtration Capacity : {display.FiltrationCapacity}
                      </h4>
                      <h6>Price : RS {display.price}</h6>
                    </div>
                  ) : null}

                  {display.id === 50 ? <></> : null}

                  <br />
                  {/* <span className="justify-text">{display.Sinhala_describe}</span> */}
                  <br />
                  <br />
                  {/* <span className="justify-text">
                    {display.English_describe}
                  </span> */}
                  <br />
                </div>
                {/* <div key={8}>
                  <h4>Brand : {display.author}</h4>
                </div>
                <div key={9}>
                  <h4>Created : {display.title}</h4>
                </div> */}
              </Space>
            </Col>
          </Row>
        </div>
      </Modal>

      <Modal
        // eslint-disable-next-line no-useless-concat
        open={isModalVisible1}
        onCancel={handleCancel1}
        width={800}
        style={{
          textAlign: "center",
        }}
        footer={[
          // <Button key="send" onClick={handleCancel1}>
          //   Send
          // </Button>,
          <Button key="back" onClick={handleCancel1}>
            Cancel
          </Button>,
        ]}
      >
        <div>
          <Row>
            <Col
              className="model_contact"
              xs={{ span: 24 }}
              sm={{ span: 10 }}
              lg={{ span: 12 }}
            >
              <Col>
                <h1>{display.title}</h1>
              </Col>

              <img src={selectedImage} alt="firstShowImage" />
              <h5>
                ඔබට මෙය මිලදී ගැනීමට හො වැඩි විස්තර දැන ගැනීමට අවශ්‍යනම් ඔබගේ
                නම, දුරකතනය අංකය ඔබගේ අවශ්‍යතාවය (මිලදී ගැනීමට ,විස්තර දැන
                ගැනීමට) සදහන් කර අප වෙත පනිවිඩයක් යොමු කරන්න. හැකි ඉක්මනින් අප
                ආයතනයෙන් ඔබ වෙතට ඇමතුමක් ලබා දෙනු ඇත.
              </h5>
              <h5>
                To acquire further details or proceed with a purchase, we kindly
                request you to send us a message encompassing your full name,
                phone number, and specific requirements. Our company will
                promptly reach out to you to address your inquiries and fulfill
                your needs. We appreciate your cooperation.
              </h5>
            </Col>
                    
            <Col
              className="Model_Form"
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <h2>Place Order</h2>
              <Space direction="vertical">
                
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form-model "
                >
                  <div className="form-field-model ">
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
                  <div className="form-field-model ">
                    <label htmlFor="mobile">Your Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="What's your Mobile Number?"
                    />
                  </div>
                  <div className="form-field-model ">
                    <label htmlFor="Brand">Brand</label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={display.title}
                      readOnly
                      placeholder="Selected One"
                    />
                  </div>

                  <div className="form-field-model ">
                    <label htmlFor="choose">Choose</label>

                    <Row>
                      <Col
                        className="checkbuy"
                        xs={{ span: 8 }}
                        sm={{ span: 8 }}
                        lg={{ span: 8 }}
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="buy"
                            checked={checkboxValues.buy}
                            onChange={handleCheckboxChange}
                            style={{ height: "20px", width: "20px" }}
                          />
                        </label>
                      </Col>

                      <Col
                        className="model_checkbox"
                        xs={{ span: 16 }}
                        sm={{ span: 16 }}
                        lg={{ span: 16 }}
                      >
                        <h6>I want to Buy (මිලදී ගැනීමට)</h6>
                      </Col>

                      <Col
                        className=""
                        xs={{ span: 8 }}
                        sm={{ span: 8 }}
                        lg={{ span: 8 }}
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="getInfo"
                            checked={checkboxValues.getInfo}
                            onChange={handleCheckboxChange}
                            style={{ height: "20px", width: "20px" }}
                          />
                        </label>
                      </Col>
                      <Col
                        className="model_checkbox "
                        xs={{ span: 16 }}
                        sm={{ span: 16 }}
                        lg={{ span: 16 }}
                      >
                        <h6>I want to Get More Details (විස්තර දැන ගැනීමට )</h6>
                      </Col>
                    </Row>
                  </div>

                  {/* <div className="form-field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What do you want to say?"
                    />
                  </div> */}

                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  <button type="submit">
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </Space>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
}

const Domestic = [
  {
    id: 1,
    title: "Cruze Water Filter",
    author: "Ro + Uv + Alakline Cruze Glaze, For Domestic (White,12L)",
    price: " 70 000",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "12L",
    stages: "6 Stage Filter",
    technology: "UV + TDS",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "100-150 litters per day",
    feature: "No",
    image: cruze,
    image1: cruze1,
    image2: cruze2,
    image3: cruze3,
    image4: cruze1,
    Sinhala_describe:
      "ජල පෙරහන යනු භෞතික බාධකයක්, රසායනික ක්‍රියාවලියක් හෝ ජීව විද්‍යාත්මක ක්‍රියාවලියක් මගින් ජලයෙන් අපද්‍රව්‍ය සහ අපවිත්‍ර ද්‍රව්‍ය ඉවත් කරන උපකරණයකි. ජල පෙරණයක පරමාර්ථය වන්නේ අවසාදිත, ක්ලෝරීන්, බැක්ටීරියා, වෛරස්, බැර ලෝහ සහ වෙනත් හානිකර රසායනික ද්‍රව්‍ය වැනි අනවශ්‍ය ද්‍රව්‍ය ඉවත් කිරීමෙන් ජලයේ ගුණාත්මකභාවය වැඩි දියුණු කිරීමයි.",
    English_describe:
      "A water filter is a device that removes impurities and contaminants from water by means of a physical barrier, a chemical process, or a biological process. The purpose of a water filter is to improve the quality of the water by removing unwanted substances such as sediment, chlorine, bacteria, viruses, heavy metals, and other harmful chemicals.",
  },
  {
    id: 2,
    title: "Aqua Grand Water Filter",
    author:
      "Ro+uv+uf+tds Plastic EFM Supreme Water Purifier Regular Domestic RO System",
    price: " 75 000",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "18L",
    stages: "6 Stage Filter",
    technology: "RO + UF + TDS + ALKALINE",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "100-150 litters per day",
    feature: "No",

    image: aqua,
    image1: aqua,
    image2: aqua1,
    image3: aqua2,
    image4: aqua,

    Sinhala_describe:
      "ජල පෙරහන යනු භෞතික බාධකයක්, රසායනික ක්‍රියාවලියක් හෝ ජීව විද්‍යාත්මක ක්‍රියාවලියක් මගින් ජලයෙන් අපද්‍රව්‍ය සහ අපවිත්‍ර ද්‍රව්‍ය ඉවත් කරන උපකරණයකි. ජල පෙරණයක පරමාර්ථය වන්නේ අවසාදිත, ක්ලෝරීන්, බැක්ටීරියා, වෛරස්, බැර ලෝහ සහ වෙනත් හානිකර රසායනික ද්‍රව්‍ය වැනි අනවශ්‍ය ද්‍රව්‍ය ඉවත් කිරීමෙන් ජලයේ ගුණාත්මකභාවය වැඩි දියුණු කිරීමයි.",
    English_describe:
      "A water filter is a device that removes impurities and contaminants from water by means of a physical barrier, a chemical process, or a biological process. The purpose of a water filter is to improve the quality of the water by removing unwanted substances such as sediment, chlorine, bacteria, viruses, heavy metals, and other harmful chemicals.",
  },
  {
    id: 3,
    title: "Smart RO Water Filter",
    author: "Compact Home RO Water Purifier with UV Sterilizer",
    price: "70 000",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + UV + TDS",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "100-150 litters per day",
    feature: "No",
    image: smartRO1,
    image1: smartRO1,
    image2: smartRO2,
    image3: smartRO3,
    image4: smartRO4,
  },
  {
    id: 4,
    title: "3 stage Water Filter",
    author: "RO water purifier",
    price: "70 000",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "10L",
    stages: "3 Stage Filter",
    technology: "RO + UV + TDS",
    Warranty: " 1 Year (Electronic parts only) ",
    FiltrationCapacity: "100-150 litters per day",
    feature: "Tap Included",
    image: stage,
    image1: stage3,
    image2: stage1,
    image3: stage2,
    image4: stage3,
  },
  {
    id: 5,
    title: "Hot and Normal Water Filter",
    author: "5 STAGES HOT NORMAL RO WATER FILTER",
    price: "88 000",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "8L",
    stages: "4 Stage Filter",
    technology: "RO + TDS",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "100-150 litters per day",
    feature: "Hot water included",
    color: "Gold and Red",
    image: hot1,
    image1: hot5,
    image2: hot2,
    image3: hot3,
    image4: hot4,
  },
];

const Commercial = [
  {
    id: 13,
    title: "400 GPD RO PLANT",
    author: "400 GPD RO PLANT",
    price: "375 000",
    application: "Business / Factory ",
    installation: "Wall Mounted / Stranded",
    waterTank: "500 L",
    stages: "3 Stage Filter",
    technology: "RO + UV + TDS",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "750 - 1000 litters per day",
    feature: " Outline frame constructed ",
    color: "Blue",
    image: indu4,
    image1: indu1,
    image2: indu2,
    image3: indu3,
    image4: indu4,
  },
  {
    id: 50,
    title: "Custormisble RO Filters",
    author: "Custormisble RO Filters [300,500,600,900 GPD RO PALNTS]",
    price: "Custom",
    price1: "325 000",
    price2: "435 000",
    price3: "450 000",
    price4: "525 000",
    image: com2,
  },
];

const Ionizer = [
  {
    id: 53,
    title: "Ionizer",
    author: "Ionizer",
    application: "Household",
    installation: "Strand",
    waterTank: "At that time , The required amount is filtered",
    stages: " - ",
    technology: "TDS + pH",
    Warranty: " - ",
    FiltrationCapacity: " - ",
    feature: "",
    color: "Blue",
    price: "475 000",
    image: ionizer,
  },
];

const Industrial = [
  {
    id: 30,
    title: "500LPH Plant",
    author: "500LPH Plant With 1054 sand vessel  & 1054 Resin vessel.",
    price: "825 000",
    application: "Business",
    installation: "Strand",
    waterTank: "1000 L - 2000 L",
    stages: "3/4 Stage Filter",
    technology: "RO + TDS (UV + Mineral + Alkaline )",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "10000 litters per day",
    feature: "2..9 pressure pump - 5 year service Warranty",
    color: "Blue",
    image: industrial,
    image1: industrial1,
    image2: industrial2,
    image3: industrial3,
    image4: industrial4,
  },
  {
    id: 51,
    title: "Custormisble Industrial Filters",
    author: "Custormisble Industrial Filter [250LPH , 750LPH , 1000LPH ]",
    price: "Custom",
    application: "Business",
    installation: "Strand",
    waterTank: "1000 L - 2000 L",
    stages: "3/4 Stage Filter",
    technology: "RO + TDS (UV + Mineral + Alkaline )",
    Warranty: "1 Year (Electronic parts only)",
    FiltrationCapacity: "10000 litters per day",
    feature: "2..9 pressure pump - 5 year service Warranty",
    color: "Blue",
    image: industri,
  },
];

const Spare = [
  {
    id: 55,
    title: "Inline Sediment Filter",
    image: spare3,
  },

  {
    id: 56,
    title: "Inline Carbon Filter ",
    image: spare7,
  },
  {
    id: 57,
    title: "Biocera Filter (Alkaline Filter)",
    image: spare11,
  },
  {
    id: 58,
    title: "4 in 1 Mineral Filter",
    image: spare9,
  },
  {
    id: 59,
    title: "80 GPD RO Filter",
    image:  spare2,
  },
  {
    id: 60,
    title: "Inline Sediment Filter",
    image: spare4,
  },

  {
    id: 61,
    title: "GAC Carbon Filter",
    image: spare5,
  },
  {
    id: 62,
    title: "PP Sediment Filter",
    image: spare6,
  },
  {
    id: 63,
    title: "UDF Carbon Filter",
    image: spare8,
  },
  {
    id: 64,
    title: "Post Inline GAC Carbon Reverse",
    image:  spare10,
  },
  {
    id: 64,
    title: "CTO Carbon Filter",
    image:  spare1,
  },
];

export default ProductList;
