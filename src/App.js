import Home from "./pages/Home/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>

    
  );
  
}

export default App;
