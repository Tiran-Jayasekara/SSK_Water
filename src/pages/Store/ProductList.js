import { Container, Row, Col} from "reactstrap";
import './Store.css'
import { Modal, Button,Space} from "antd";
import { useState } from "react";

function ProductList(props) {
    // Example array of books

    const imageClick = (product)=>{
      console.log(product);
      setDisplay({
        id: product.id,
        title: product.title,
        author: product.author,
        price: product.price,
        image: product.image,
        Sinhala_describe:product.Sinhala_describe,
        English_describe:product.English_describe
      });
      setIsModalVisible(true);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Send data to backend or email
  };


    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleCancel1 = () => {
      setIsModalVisible1(false);
    };

    const [display,setDisplay] = useState({})
    
  
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
  
    return (
    <div>
  <Container>
  {productList
    .reduce((rows, product, index) => (index % 4 === 0 ? rows.concat([[product]]) : (rows[rows.length - 1].push(product), rows)), [])
    .map((row, rowIndex) => (
      <Row key={rowIndex} className="product-row">
        {row.map((product) => (
          <Col key={product.id} md="3" sm="6" className="product-col"> {/* Adjust column size for medium (md) and small (sm) screens */}
            <div className="product-container">
              <img className="product-image" src={product.image} alt={product.title} onClick={() => imageClick(product)} />
              <h5 className="product-title">{product.title}</h5>
              <div className="product-details">
              <p className="product-price">RS : {product.price}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    ))}
</Container>


<Modal
  visible={isModalVisible}
  onCancel={handleCancel}
  destroyOnClose
  width={1000}
  style={{
    textAlign: "center"
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
    <Row gutter={[16, 16]}>
      <Col md={12} xs={24}>
        <h1>{display.title}</h1>
      </Col>
      <Col md={12} xs={24}>
        <Space direction="vertical">
          <div key={0}>
            &nbsp;&nbsp;<b><img className="model_image" src={display.image} alt={display.title}/></b>
          </div>
          <div key={1}>
            <h3>ABOUT</h3>
            <br />
            <span className="justify-text">{display.Sinhala_describe}</span>
            <br />
            <br />
            <span className="justify-text">{display.English_describe}</span>
            <br />
          </div>
          
          <div key={8}>
            <h4>Brand : {display.author}</h4>
          </div>
          <div key={9}>
            <h4>Created : {display.title}</h4>
          </div>
        </Space>
      </Col>
    </Row>
  </div>
</Modal>



  <Modal
        // eslint-disable-next-line no-useless-concat
        visible={isModalVisible1}
        onCancel={handleCancel1}
        destroyOnClose
        width={1000}
        style={{
          textAlign: "center"
        }}
        footer={[
          <Button key="send" onClick={handleCancel1}>
            Send
          </Button>,
          <Button key="back" onClick={handleCancel1}>
            Cancel
          </Button>,
        ]}
      >
    <div className="modal-content">
    <Row gutter={[16, 16]}>
      <Col md={12} xs={24}>
        <h1 className="modal-title">{display.title}</h1>
        <h5>...........ඔබට මෙය මිලදී ගැනීමට හො වැඩි විස්තර දැන ගැනීමට අවශ්‍යනම් ඔබගේ නම, දුරකතනය අංකය ඔබගේ අවශ්‍යතාවය (මිලදී ගැනීමට ,විස්තර දැන ගැනීමට) සදහන් කර අප වෙත පනිවිඩයක් යොමු කරන්න. හැකි ඉක්මනින් අප ආයතනයෙන් ඔබ වෙතට ඇමතුමක් ලබා දෙනු ඇත...........</h5>
      </Col>
      <Col md={12} xs={24}>
        <Space direction="vertical" className="contact-form">
          <h2 className="form-title">Place Order</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              className="form-input"
            />
            <label htmlFor="email" className="form-label">
              Number:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-input"
            />
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
              className="form-input"
            ></textarea>
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
      price: 85000,
      image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg",
      Sinhala_describe:"ජල පෙරහන යනු භෞතික බාධකයක්, රසායනික ක්‍රියාවලියක් හෝ ජීව විද්‍යාත්මක ක්‍රියාවලියක් මගින් ජලයෙන් අපද්‍රව්‍ය සහ අපවිත්‍ර ද්‍රව්‍ය ඉවත් කරන උපකරණයකි. ජල පෙරණයක පරමාර්ථය වන්නේ අවසාදිත, ක්ලෝරීන්, බැක්ටීරියා, වෛරස්, බැර ලෝහ සහ වෙනත් හානිකර රසායනික ද්‍රව්‍ය වැනි අනවශ්‍ය ද්‍රව්‍ය ඉවත් කිරීමෙන් ජලයේ ගුණාත්මකභාවය වැඩි දියුණු කිරීමයි.",
      English_describe:"A water filter is a device that removes impurities and contaminants from water by means of a physical barrier, a chemical process, or a biological process. The purpose of a water filter is to improve the quality of the water by removing unwanted substances such as sediment, chlorine, bacteria, viruses, heavy metals, and other harmful chemicals."
    },
    {
      id: 2,
      title: "Domestic 2 ",
      author: "Harper Lee",
      price: 85000,
      image: "https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/1280x1280/products/476/2363/brondell-capella-RC250-reverse-osmosis-water-filtration-system-white__88084.1660687393.jpg?c=1"
    },
    {
      id: 3,
      title: "Domestic 3 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
    },
    {
      id: 4,
      title: "Domestic 4 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
    },
    {
      id: 5,
      title: "Domestic 1 ",
      author: "Douglas Adams",
      price: 85000,
      image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg"
    },
    {
      id: 6,
      title: "Domestic 2 ",
      author: "Harper Lee",
      price: 85000,
      image: "https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/1280x1280/products/476/2363/brondell-capella-RC250-reverse-osmosis-water-filtration-system-white__88084.1660687393.jpg?c=1"
    },
    {
      id: 7,
      title: "Domestic 3 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
    },
    {
      id: 8,
      title: "Domestic 4 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
    },
    {
      id: 9,
      title: "Domestic 1 ",
      author: "Douglas Adams",
      price: 85000,
      image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg"
    },
    {
      id: 10,
      title: "Domestic 2 ",
      author: "Harper Lee",
      price: 85000,
      image: "https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/1280x1280/products/476/2363/brondell-capella-RC250-reverse-osmosis-water-filtration-system-white__88084.1660687393.jpg?c=1"
    },
    {
      id: 11,
      title: "Domestic 3 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
    },
    {
      id: 12,
      title: "Domestic 4 ",
      author: "F. Scott ",
      price: 85000,
      image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
    },
  ];

  const Commercial = [
      {
        id: 1,
        title: "Commercial 1",
        author: "Douglas Adams",
        price: 85000,
        image:"https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg"
      },
      {
        id: 2,
        title: "Commercial 2",
        author: "Harper Lee",
        price: 85000,
        image:"https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 3,
        title: "Commercial 3",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://m.media-amazon.com/images/I/81dXerYATVL.jpg"
      },
      {
        id: 4,
        title: "Commercial 4",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
      },{
        id: 5,
        title: "Commercial 1",
        author: "Douglas Adams",
        price: 85000,
        image:"https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg"
      },
      {
        id: 6,
        title: "Commercial 2",
        author: "Harper Lee",
        price: 85000,
        image:"https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 7,
        title: "Commercial 3",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://m.media-amazon.com/images/I/81dXerYATVL.jpg"
      },
      {
        id: 8,
        title: "Commercial 4",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
      },
    ];

    const Ionizer = [
      {
        id: 1,
        title: "Ionizer 1",
        author: "Douglas Adams",
        price: 85000,
        image:"https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg"
      },
      {
        id: 2,
        title: "Ionizer 2",
        author: "Harper Lee",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU"
      },
      {
        id: 3,
        title: "Ionizer 3",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU"
      },
      {
        id: 4,
        title: "Ionizer 4",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU"
      },
      {
        id: 5,
        title: "Ionizer 1",
        author: "Douglas Adams",
        price: 85000,
        image:"https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg"
      },
      {
        id: 6,
        title: "Ionizer 2",
        author: "Harper Lee",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU"
      },
      {
        id: 7,
        title: "Ionizer 3",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU"
      },
      {
        id: 8,
        title: "Ionizer 4",
        author: "F. Scott Fitzgerald",
        price: 85000,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU"
      },
    ];

    const Spare = [
      {
        id: 13,
        title: "Spare 1",
        author: "Douglas Adams",
        price: 1099,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy-3G8I6RCqLIQOqv1NzSUbe4O2NxyPTZwQ&usqp=CAU"
      },
      {
        id: 14,
        title: "Spare 2",
        author: "Harper Lee",
        price: 799,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcXCHl7VsM9ogGXSy9cFQKHgTCFY7bwqnVUB3fBiHchl1OkRMS8DDi9fu12lfbNXrWPM&usqp=CAU"
      },
      {
        id: 15,
        title: "Spare 3",
        author: "F. Scott Fitzgerald",
        price: 1299,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA25k_qXXxSjY70j77YHjjCjKiZ88rcMtjrfg1gdjeHfnr06nTnJcq7QE-gyhqlCBUUU&usqp=CAU"
      },
      {
        id: 16,
        title: "Spare 4",
        author: "F. Scott Fitzgerald",
        price: 1299,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcenTO2gmA-QsPMO6xJn4mznzVzfRsndQak9eGegYY_yp1sC15dxdB13kqBLPefhyz7g&usqp=CAU"
      },
    ];

    const Industrial = [
      {
        id: 13,
        title: "Industrial 1",
        author: "Douglas Adams",
        price: 1099,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy-3G8I6RCqLIQOqv1NzSUbe4O2NxyPTZwQ&usqp=CAU"
      },
      {
        id: 14,
        title: "Industrial 2",
        author: "Harper Lee",
        price: 7099,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcXCHl7VsM9ogGXSy9cFQKHgTCFY7bwqnVUB3fBiHchl1OkRMS8DDi9fu12lfbNXrWPM&usqp=CAU"
      },
      {
        id: 15,
        title: "Industrial 3",
        author: "F. Scott Fitzgerald",
        price: 12099,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA25k_qXXxSjY70j77YHjjCjKiZ88rcMtjrfg1gdjeHfnr06nTnJcq7QE-gyhqlCBUUU&usqp=CAU"
      },
      {
        id: 16,
        title: "Industrial 4",
        author: "F. Scott Fitzgerald",
        price: 12399,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcenTO2gmA-QsPMO6xJn4mznzVzfRsndQak9eGegYY_yp1sC15dxdB13kqBLPefhyz7g&usqp=CAU"
      },
    ];


  
  export default ProductList;
  