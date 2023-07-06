import "./Store.css";
import { Modal, Button, Space, Row, Col } from "antd";
import { useState, useRef, useEffect } from "react";
import domestic1 from "../../assests/images/store/domestic/1.png";
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

  // Example array of books

  const imageClick = (product) => {
    console.log(product);
    setDisplay({
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      application: product.application,
      installation: product.installation,
      waterTank: product.waterTank,
      stages: product.stages,
      technology: product.technology,
      feature: product.feature,
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

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
            "Thank you. I will get back to you as soon as possible. බොහොම ස්තූතියි . ඔබගේ පණිවිඩය අපට ලැබුණා. අප ආයතනයෙන් හැකි ඉක්මනින් ඔබට ඇමතුමක් ලබා දෙනු ඇත."
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
                sm={{ span: 16 }}
                lg={{ span: 8 }}
              >
                <div
                  className={`product-container ${
                    productIndex === 0 ? "first-product" : ""
                  }`}
                  onClick={() => imageClick(product)}
                >
                  <h5 className="product-title revealElement">
                    {product.title}
                  </h5>
                  <div className="product-details revealElement">
                    <p className="product-price revealElement">
                      RS : {product.price}
                    </p>
                  </div>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
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
            Order
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
            <Col xs={{ span: 24 }} sm={{ span: 10 }} lg={{ span: 24 }}>
              <Space direction="vertical">
                <div key={0} className="image-container revealElement">
                  &nbsp;&nbsp;
                  <b>
                    <img
                      className="model_image revealElement"
                      src={selectedImage}
                      alt={display.title}
                    />
                  </b>
                </div>
                <Row className="model_smallImageList">
                  <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
                  <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                    <div
                      className="model_Small_List revealElement"
                      onClick={() => handleImageClick(display.image1)}
                      key={0}
                    >
                      &nbsp;&nbsp;
                      <b>
                        <img
                          className="model_image_small revealElement"
                          src={display.image1}
                          alt={display.title}
                        />
                      </b>
                    </div>
                  </Col>
                  <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                    <div
                      className="model_Small_List revealElement"
                      onClick={() => handleImageClick(display.image2)}
                      key={0}
                    >
                      &nbsp;&nbsp;
                      <b>
                        <img
                          className="model_image_small revealElement"
                          src={display.image2}
                          alt={display.title}
                        />
                      </b>
                    </div>
                  </Col>
                  <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                    <div
                      className="model_Small_List revealElement"
                      onClick={() => handleImageClick(display.image3)}
                      key={0}
                    >
                      &nbsp;&nbsp;
                      <b>
                        <img
                          className="model_image_small revealElement"
                          src={display.image3}
                          alt={display.title}
                        />
                      </b>
                    </div>
                  </Col>
                  <Col xs={{ span: 5 }} sm={{ span: 5 }} lg={{ span: 5 }}>
                    <div
                      className="model_Small_List revealElement"
                      key={0}
                      onClick={() => handleImageClick(display.image4)}
                    >
                      &nbsp;&nbsp;
                      <b>
                        <img
                          className="model_image_small revealElement"
                          src={display.image4}
                          alt={display.title}
                        />
                      </b>
                    </div>
                  </Col>
                  <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
                </Row>
                <div className="model_about revealElement" key={1}>
                  {/* <h3>ABOUT</h3> */}
                  <div className="product_details">
                    <h4>Application : {display.application}</h4>
                    <h4>Installation Type : {display.installation}</h4>
                    <h4>Water Tank : {display.waterTank}</h4>
                    <h4>Stages : {display.stages}</h4>
                    <h4>Teachnology : {display.technology}</h4>
                    <h4>Features : {display.feature}</h4>
                    <h6>Price : {display.price} RS</h6>
                  </div>
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
              className="model_contact revealElement"
              xs={{ span: 24 }}
              sm={{ span: 16 }}
              lg={{ span: 10 }}
            >
              <h1>{display.title}</h1>

              <img src={selectedImage} alt="firstShowImage" />
              <h5>
                ඔබට මෙය මිලදී ගැනීමට හො වැඩි විස්තර දැන ගැනීමට අවශ්‍යනම් ඔබගේ
                නම, දුරකතනය අංකය ඔබගේ අවශ්‍යතාවය (මිලදී ගැනීමට ,විස්තර දැන
                ගැනීමට) සදහන් කර අප වෙත පනිවිඩයක් යොමු කරන්න. හැකි ඉක්මනින් අප
                ආයතනයෙන් ඔබ වෙතට ඇමතුමක් ලබා දෙනු ඇත.
              </h5>
              <h5>
                If you want to know more details about buying this, send us a
                message with your name, phone number and your need (to buy, to
                know the details). We will give you a call from our company as
                soon as possible.
              </h5>
            </Col>

            <Col
              className="Model_Form"
              xs={{ span: 24 }}
              sm={{ span: 16 }}
              lg={{ span: 12 }}
            >
              <Space direction="vertical">
                <h2>Place Order</h2>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form revealElement"
                >
                  <div className="form-field revealElement">
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
                  <div className="form-field revealElement">
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
                  <div className="form-field revealElement">
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

                  <div className="form-field revealElement">
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
                        className="model_checkbox revealElement"
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
    title: "Domestic",
    author: "Douglas Adams",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,
    image1: domestic1,
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    Sinhala_describe:
      "ජල පෙරහන යනු භෞතික බාධකයක්, රසායනික ක්‍රියාවලියක් හෝ ජීව විද්‍යාත්මක ක්‍රියාවලියක් මගින් ජලයෙන් අපද්‍රව්‍ය සහ අපවිත්‍ර ද්‍රව්‍ය ඉවත් කරන උපකරණයකි. ජල පෙරණයක පරමාර්ථය වන්නේ අවසාදිත, ක්ලෝරීන්, බැක්ටීරියා, වෛරස්, බැර ලෝහ සහ වෙනත් හානිකර රසායනික ද්‍රව්‍ය වැනි අනවශ්‍ය ද්‍රව්‍ය ඉවත් කිරීමෙන් ජලයේ ගුණාත්මකභාවය වැඩි දියුණු කිරීමයි.",
    English_describe:
      "A water filter is a device that removes impurities and contaminants from water by means of a physical barrier, a chemical process, or a biological process. The purpose of a water filter is to improve the quality of the water by removing unwanted substances such as sediment, chlorine, bacteria, viruses, heavy metals, and other harmful chemicals.",
  },
  {
    id: 2,
    title: "Domestic 2 ",
    author: "Harper Lee",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 3,
    title: "Domestic 3 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,
    image1: domestic1,
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 4,
    title: "Domestic 4 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 5,
    title: "Domestic 1 ",
    author: "Douglas Adams",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 6,
    title: "Domestic 2 ",
    author: "Harper Lee",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 7,
    title: "Domestic 3 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 8,
    title: "Domestic 4 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 9,
    title: "Domestic 1 ",
    author: "Douglas Adams",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg",

    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 10,
    title: "Domestic 2 ",
    author: "Harper Lee",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image: domestic1,

    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 11,
    title: "Domestic 3 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",

    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
  {
    id: 12,
    title: "Domestic 4 ",
    author: "F. Scott ",
    price:
      "$999 or $41.62/mo.per month for 24 mo.months before trade inFootnote",
    application: "Household",
    installation: "Wall Mounted",
    waterTank: "11L",
    stages: "6 Stage Filter",
    technology: "RO + uv + TDS",
    feature: "Transferase the process",
    image:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image1:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image2:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
    image3:
      "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg",
    image4:
      "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg",
  },
];

const Commercial = [
  {
    id: 13,
    title: "Commercial 1",
    author: "Douglas Adams",
    price: 85000,
    image:
      "https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg",
  },
  {
    id: 14,
    title: "Commercial 2",
    author: "Harper Lee",
    price: 85000,
    image:
      "https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 15,
    title: "Commercial 3",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image: "https://m.media-amazon.com/images/I/81dXerYATVL.jpg",
  },
  {
    id: 16,
    title: "Commercial 4",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
  },
  {
    id: 17,
    title: "Commercial 1",
    author: "Douglas Adams",
    price: 85000,
    image:
      "https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg",
  },
  {
    id: 18,
    title: "Commercial 2",
    author: "Harper Lee",
    price: 85000,
    image:
      "https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 19,
    title: "Commercial 3",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image: "https://m.media-amazon.com/images/I/81dXerYATVL.jpg",
  },
  {
    id: 20,
    title: "Commercial 4",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
  },
];

const Ionizer = [
  {
    id: 21,
    title: "Ionizer 1",
    author: "Douglas Adams",
    price: 85000,
    image:
      "https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg",
  },
  {
    id: 22,
    title: "Ionizer 2",
    author: "Harper Lee",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU",
  },
  {
    id: 23,
    title: "Ionizer 3",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU",
  },
  {
    id: 24,
    title: "Ionizer 4",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU",
  },
  {
    id: 25,
    title: "Ionizer 1",
    author: "Douglas Adams",
    price: 85000,
    image:
      "https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg",
  },
  {
    id: 26,
    title: "Ionizer 2",
    author: "Harper Lee",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU",
  },
  {
    id: 27,
    title: "Ionizer 3",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU",
  },
  {
    id: 28,
    title: "Ionizer 4",
    author: "F. Scott Fitzgerald",
    price: 85000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU",
  },
];

const Spare = [
  {
    id: 29,
    title: "Spare 1",
    author: "Douglas Adams",
    price: 1099,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy-3G8I6RCqLIQOqv1NzSUbe4O2NxyPTZwQ&usqp=CAU",
  },
  {
    id: 30,
    title: "Spare 2",
    author: "Harper Lee",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcXCHl7VsM9ogGXSy9cFQKHgTCFY7bwqnVUB3fBiHchl1OkRMS8DDi9fu12lfbNXrWPM&usqp=CAU",
  },
  {
    id: 31,
    title: "Spare 3",
    author: "F. Scott Fitzgerald",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA25k_qXXxSjY70j77YHjjCjKiZ88rcMtjrfg1gdjeHfnr06nTnJcq7QE-gyhqlCBUUU&usqp=CAU",
  },
  {
    id: 32,
    title: "Spare 4",
    author: "F. Scott Fitzgerald",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcenTO2gmA-QsPMO6xJn4mznzVzfRsndQak9eGegYY_yp1sC15dxdB13kqBLPefhyz7g&usqp=CAU",
  },
];

const Industrial = [
  {
    id: 33,
    title: "Industrial 1",
    author: "Douglas Adams",
    price: 1099,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy-3G8I6RCqLIQOqv1NzSUbe4O2NxyPTZwQ&usqp=CAU",
  },
  {
    id: 34,
    title: "Industrial 2",
    author: "Harper Lee",
    price: 7099,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcXCHl7VsM9ogGXSy9cFQKHgTCFY7bwqnVUB3fBiHchl1OkRMS8DDi9fu12lfbNXrWPM&usqp=CAU",
  },
  {
    id: 35,
    title: "Industrial 3",
    author: "F. Scott Fitzgerald",
    price: 12099,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA25k_qXXxSjY70j77YHjjCjKiZ88rcMtjrfg1gdjeHfnr06nTnJcq7QE-gyhqlCBUUU&usqp=CAU",
  },
  {
    id: 36,
    title: "Industrial 4",
    author: "F. Scott Fitzgerald",
    price: 12399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcenTO2gmA-QsPMO6xJn4mznzVzfRsndQak9eGegYY_yp1sC15dxdB13kqBLPefhyz7g&usqp=CAU",
  },
];

export default ProductList;
