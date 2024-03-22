import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Categories from "./components/category/Categories";
import Product from "./components/cards/Hotels";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="hotelscard" element={<Product />} />
        <Route path="gardencard" element={<Product />} />
        <Route path="cateringcard" element={<Product />} />
        <Route path="saloncard" element={<Product />} />
        <Route path="fireworkcard" element={<Product />} />
        <Route path="grocerycard" element={<Product />} />
        <Route path="lightcard" element={<Product />} />
        <Route path="carcard" element={<Product />} />
        <Route path="cardsprintingcard" element={<Product />} />
        <Route path="soundscard" element={<Product />} />
        <Route path="photographycard" element={<Product />} />
        <Route path="marecard" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
