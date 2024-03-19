import React from "react";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
// import { BrowserRouter } from "react-router-dom";
import Block from "./components/blocks/Block";
import About from "./components/about/About"

export default function App() {
  return (
    <div>
      <Nav />
      <Block/>
      <About/>
      <Footer />
    </div>
  );
}
