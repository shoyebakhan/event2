import Nav from "./components/navbar/Nav"
import Heropage from "./components/heropage/Heropage"
import WhyUs from "./components/whyus/WhyUs"
import Map_contact from "./components/map & contact/Map_contact"
import Team from "./components/ourteam/Team"
import Review from "./components/Customer_Review/Review"
import Footer from "./components/footer/Footer"
import About from "./components/about us/AboutUs"

export default function App(){
  return(
    <>
    <Nav />
    <Heropage />
    {/* <About/> */}
    <WhyUs />
    <Team />
    <Review />
    <Map_contact />
    <Footer />
    </>
  )
}
