import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import MoreHome from "./Components/MoreHome";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/" element={<MoreHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
