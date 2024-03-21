import React from "react";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
// import { BrowserRouter } from "react-router-dom";
// import Block from "./components/blocks/Block";
import About from "./components/about/About";``
import Card from "./components/cardsData/Card";
import Product from "./components/cards/Product";

export default function App() {
  return (
    <div>
      <Nav />
      {/* <Block/> */}
      <Card/>
      <Product/>
      {/* <About/> */}
      {/* <Footer /> */}
    </div>
  );
}
