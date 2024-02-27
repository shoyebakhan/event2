import Nav from "./components/navbar/Nav"
import Heropage from "./components/heropage/Heropage"
import WhyUs from "./components/whyus/WhyUs"
import Map_contact from "./components/map & contact/Map_contact"
import Team from "./components/ourteam/Team"
import Review from "./components/Customer_Review/Review"
import Footer from "./components/footer/Footer"
import React from "react";
import Signup from "./Signup"

export default function App(){
  return(
    <div>
    <Nav />
    <Heropage />
    {/* <About/> */}
    <WhyUs />
    <Team />
    <Signup/>
    <Review />
    <Map_contact />
    <Footer />
    </div>
  )
}
