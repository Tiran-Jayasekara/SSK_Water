import { Container, Row, Col} from "reactstrap";
import './Store.css'


function ProductList(props) {
    // Example array of books


    const Osmosis = [
      {
        id: 1,
        title: "Osmosis 1 ",
        author: "Douglas Adams",
        price: 10.99,
        image: "https://m.media-amazon.com/images/I/71Iq1Ihu4fL._SL1500_.jpg"
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
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image: "https://naturerowater.com/wp-content/uploads/2020/01/0-kent-Excell-ro-water-filter-900x900-1.jpg"
      },
      {
        id: 4,
        title: "Osmosis 4 ",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        image: "https://www.wawaterfilters.com.au/wp-content/uploads/2011/12/Autoclave-Zero-TDS-Reverse-Osmosis-180722-1428-max-min.jpg"
      },
    ];
  
    const Ionizers = [
        {
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
          id: 9,
          title: "Distillation 1",
          author: "Douglas Adams",
          price: 10.99,
          image:"https://sc04.alicdn.com/kf/H2122d137337946e9a5bd403ddc9a97cdv/251009102/H2122d137337946e9a5bd403ddc9a97cdv.jpg"
        },
        {
          id: 10,
          title: "Distillation 2",
          author: "Harper Lee",
          price: 7.99,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziXyCe6M7AuhpZ4CEUk3n9RDXBIGRSDnLi2hiuyKONddba1QaOPbsddDLHHSxLVqoW8s&usqp=CAU"
        },
        {
          id: 11,
          title: "Distillation 3",
          author: "F. Scott Fitzgerald",
          price: 12.99,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2shXuR1ZhPZgqjVTxI3F9JFoFZyOyhCGh9mpviIVSOcgOz7NGHk_x-ZpXtcfY3XJo1zE&usqp=CAU"
        },
        {
          id: 12,
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
      <Container>
      <Row>
      <Col md="6" className="Product_container">
        <div className="Products">
          {productList
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                
                <img src={item.image} alt={item.title} />
                <p>Brand: {item.author}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
        </div>
      </Col>
      <Col md="6" className="Product_container">
      
        <div className="Products">
          {productList
            .filter((_, index) => index % 2 !== 0)
            .map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
                <p>Brand: {item.author}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
        </div>
      </Col>
    </Row>

      </Container>
        
      </div>
    );
  }
  
  export default ProductList;
  