import React from "react";
import "./App.css"
import RecatDom from "react-dom";

import Navbar from "./components/navbar/Navbar.js"
import Header from "./components/header/Header.js"
import Sign from "./components/sign/Sign.js"
import Price from "./components/price/Price.js"
import P_search from "./components/popularSearch/P-search.js"
import Whyimagesbazaar from "./components/why-imagesbazzar/why-imagesbazaar.jsx"
import Footer from "./components/Footer/Footer.jsx"
function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Sign />
    <Price />
    <P_search />
    <Whyimagesbazaar />
    <Footer />
    </div>
  );
}

export default App;