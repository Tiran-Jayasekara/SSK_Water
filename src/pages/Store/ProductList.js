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
        describe:product.describe
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
    case "Osmosis":
     productList = Osmosis;
     break;
    case "Ionizers":
        productList = Ionizers;
        break;
    case "Distillation":
        productList = Distillation;
        break;
    case "Ceramic":
        productList = Ceramic;
        break;
    default:
        productList = [];
    }
  
    return (
    <div>
  <Container >
  {productList
    .reduce((rows, product, index) => (index % 4 === 0 ? rows.concat([[product]]) : (rows[rows.length - 1].push(product), rows)), [])
    .map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((product) => (
          <Col key={product.id} md="3" className="Product_container">
            <div className="Products">
              <h3>{product.title}</h3>
              <img className="store_image" src={product.image} alt={product.title} onClick={() => imageClick(product)} />
              <p>Brand: {product.author}<br/>
              Price: ${product.price}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    ))}
</Container>

    <Modal
        // eslint-disable-next-line no-useless-concat
        visible={isModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        width={1000}
        style={{
          textAlign: "center"
        }}
        footer={[
          <Button key="order" onClick={() => setIsModalVisible1(true)} >
            Order
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
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
                About <br></br> &nbsp;&nbsp;<b>{display.describe}</b>
              </div>
              <div key={2}>
                Filter No : &nbsp;&nbsp;
                <b>{productList.title}</b>
              </div>
              <div key={3}>
              Filter Register No : &nbsp;&nbsp;<b>{display.title}</b>
              </div>
              <div key={4}>
              Filter ID : &nbsp;&nbsp;<b>{display.title}</b>
              </div>
              {/* <div key={5}>landOwner Name : &nbsp;&nbsp;<b>{landOwnerName}</b></div> */}
              <div key={6}>
              Filter Name : &nbsp;&nbsp;<b>{display.title}</b>
              </div>
              {/* <div key={7}>Auditor ID : &nbsp;&nbsp;<b>{getAuditorById(creatorID)}</b></div> */}
              <div key={8}>
              Filter Brand : &nbsp;&nbsp;<b>{display.title}</b>
              </div>
              <div key={9}>
              Filter Created : &nbsp;&nbsp;<b>{display.title}</b>
              </div>
            </Space>
          </Col>
        </Row>
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
        {/* <h1 className="modal-title">{display.title}</h1> */}
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



  const Osmosis = [
    {
      id: 1,
      title: "Osmosis 1 ",
      author: "Douglas Adams",
      price: 10.99,
      image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg",
      describe:"A water filter is a device that removes impurities and contaminants from water by means of a physical barrier, a chemical process, or a biological process. The purpose of a water filter is to improve the quality of the water by removing unwanted substances such as sediment, chlorine, bacteria, viruses, heavy metals, and other harmful chemicals."
    },
    {
      id: 2,
      title: "Osmosis 2 ",
      author: "Harper Lee",
      price: 7.99,
      image: "https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/1280x1280/products/476/2363/brondell-capella-RC250-reverse-osmosis-water-filtration-system-white__88084.1660687393.jpg?c=1"
    },
    {
      id: 3,
      title: "Osmosis 3 ",
      author: "F. Scott ",
      price: 12.99,
      image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
    },
    {
      id: 4,
      title: "Osmosis 4 ",
      author: "F. Scott ",
      price: 12.99,
      image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
    },{
      id: 5,
      title: "Osmosis 1 ",
      author: "Douglas Adams",
      price: 10.99,
      image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg"
    },
    {
      id: 6,
      title: "Osmosis 2 ",
      author: "Harper Lee",
      price: 7.99,
      image: "https://cdn11.bigcommerce.com/s-mpfo2gcqca/images/stencil/1280x1280/products/476/2363/brondell-capella-RC250-reverse-osmosis-water-filtration-system-white__88084.1660687393.jpg?c=1"
    },
    {
      id: 7,
      title: "Osmosis 3 ",
      author: "F. Scott ",
      price: 12.99,
      image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
    },
    {
      id: 8,
      title: "Osmosis 4 ",
      author: "F. Scott ",
      price: 12.99,
      image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
    },
  ];

  const Ionizers = [
      {
        id: 1,
        title: "Ionizers 1",
        author: "Douglas Adams",
        price: 10.99,
        image:"https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg"
      },
      {
        id: 2,
        title: "Ionizers 2",
        author: "Harper Lee",
        price: 7.99,
        image:"https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 3,
        title: "Ionizers 3",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://m.media-amazon.com/images/I/81dXerYATVL.jpg"
      },
      {
        id: 4,
        title: "Ionizers 4",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
      },{
        id: 5,
        title: "Ionizers 1",
        author: "Douglas Adams",
        price: 10.99,
        image:"https://waterionizer.org/wp-content/uploads/best-water-filters1.jpg"
      },
      {
        id: 6,
        title: "Ionizers 2",
        author: "Harper Lee",
        price: 7.99,
        image:"https://m.media-amazon.com/images/I/61XP6k4LhJL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 7,
        title: "Ionizers 3",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://m.media-amazon.com/images/I/81dXerYATVL.jpg"
      },
      {
        id: 8,
        title: "Ionizers 4",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://i5.walmartimages.com/asr/b20d86f4-a146-4e9c-a5ce-ae1743ab468b.5562a4a4c06e9fed73187456ae5ab223.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
      },
    ];

    const Distillation = [
      {
        id: 1,
        title: "Distillation 1",
        author: "Douglas Adams",
        price: 10.99,
        image:"https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg"
      },
      {
        id: 2,
        title: "Distillation 2",
        author: "Harper Lee",
        price: 7.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU"
      },
      {
        id: 3,
        title: "Distillation 3",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU"
      },
      {
        id: 4,
        title: "Distillation 4",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU"
      },
      {
        id: 5,
        title: "Distillation 1",
        author: "Douglas Adams",
        price: 10.99,
        image:"https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg"
      },
      {
        id: 6,
        title: "Distillation 2",
        author: "Harper Lee",
        price: 7.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU"
      },
      {
        id: 7,
        title: "Distillation 3",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU"
      },
      {
        id: 8,
        title: "Distillation 4",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TM-Sy373RU5_BRlBm33btVfiuqGDg6Ze35Cj1_bSo9WFvH9-A1xzsJdNKuZ2xEmT9-k&usqp=CAU"
      },
    ];

    const Ceramic = [
      {
        id: 13,
        title: "Ceramic 1",
        author: "Douglas Adams",
        price: 10.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhy-3G8I6RCqLIQOqv1NzSUbe4O2NxyPTZwQ&usqp=CAU"
      },
      {
        id: 14,
        title: "Ceramic 2",
        author: "Harper Lee",
        price: 7.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcXCHl7VsM9ogGXSy9cFQKHgTCFY7bwqnVUB3fBiHchl1OkRMS8DDi9fu12lfbNXrWPM&usqp=CAU"
      },
      {
        id: 15,
        title: "Ceramic 3",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA25k_qXXxSjY70j77YHjjCjKiZ88rcMtjrfg1gdjeHfnr06nTnJcq7QE-gyhqlCBUUU&usqp=CAU"
      },
      {
        id: 16,
        title: "Charger 4",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcenTO2gmA-QsPMO6xJn4mznzVzfRsndQak9eGegYY_yp1sC15dxdB13kqBLPefhyz7g&usqp=CAU"
      },
    ];

  
  export default ProductList;
  