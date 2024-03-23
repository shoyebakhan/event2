import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Categories from "./components/category/Categories";
import Footer from "./components/footer/Footer";
import Hotels from "./components/cards/Hotels";
import Gardens from "./components/cards/Gardens";
import Fireworks from "./components/cards/Fireworks";
import Cardsprinting from "./components/cards/Cardsprinting";
import Lights from "./components/cards/Lights";
import Kiranas from "./components/cards/Kiranas";
import Product from "./components/cards/Hotels";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="hotelscard" element={<Hotels />} />
        <Route path="gardencard" element={<Gardens />} />
        <Route path="cateringcard" element={<Product />} />
        <Route path="saloncard" element={<Product />} />
        <Route path="fireworkcard" element={<Fireworks />} />
        <Route path="grocerycard" element={<Kiranas />} />
        <Route path="lightcard" element={<Lights />} />
        <Route path="carcard" element={<Product />} />
        <Route path="cardsprintingcard" element={<Cardsprinting />} />
        <Route path="soundscard" element={<Product />} />
        <Route path="photographycard" element={<Product />} />
        <Route path="marecard" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
