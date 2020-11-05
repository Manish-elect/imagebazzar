  
import React from "react";
import RecatDom from "react-dom";
import Footer from "./components/Footer/Footer.jsx"
import Whyimagesbazaar from "./components/why_imagesbazaar/why-imagesbazaar";
import ImagesGallary from "./components/imagesgallary/imagesgallary";



function App() {
  return (
    <div>
      <ImagesGallary />
    <Whyimagesbazaar />
    <Footer />
    </div>
  );
}

export default App;