import React from "react";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Block from "./components/blocks/Block";
import About from "./components/about/About"; ``
import Card from "./components/cardsData/Card";
import Product from "./components/cards/Product";

export default function App() {
  return (
    <>
      <Nav />
      {/* <Card /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card/>}/>
          <Route path="hotelscard" element={<Product />} />
          <Route path="gardencards" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
