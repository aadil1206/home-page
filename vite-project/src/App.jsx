import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Faq from "./components/Faq";
import Works from "./components/DjWorks";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Cases from "./components/Cases";
import DjTool from "./components/DjTool";
import WebApp from "./components/WebApp";
import Video from "./components/Video";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Works />
      <div id="case"><Cases /></div>

      <DjTool />
      <div id="app"><WebApp /></div>
      <div id="video"><Video /></div>
      <div id="gallery"><Gallery /></div>
      <div id="testimonial"><Testimonials /></div>
      <div id="faq"><Faq /></div>
      <Footer />
    </div>
  );
}

export default App;
