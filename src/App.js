import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="Header_container">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
