import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import BlogPost from "./pages/Blog/BlogPost";
import BlogPost2 from "./pages/Blog/BlogPost2";
import BlogPost3 from "./pages/Blog/BlogPost3";
import BlogPost4 from "./pages/Blog/BlogPost4";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="Header_container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/BlogPost1" element={<BlogPost/>} />
            <Route path="/BlogPost2" element={<BlogPost2/>} />
            <Route path="/BlogPost3" element={<BlogPost3/>} />
            <Route path="/BlogPost4" element={<BlogPost4/>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
