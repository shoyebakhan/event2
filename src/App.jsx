import Nav from "./components/navbar/Nav"
import Heropage from "./components/heropage/Heropage"
import WhyUs from "./components/whyus/WhyUs"
import Map_contact from "./components/map & contact/Map_contact"
import Team from "./components/ourteam/Team"
import Review from "./components/Customer_Review/Review"
import Footer from "./components/footer/Footer"
export default function App(){
  return(
    <>
    <Nav />
    <Heropage />
    <WhyUs />
    <Map_contact />
    <Team />
    <Review />
    <Footer />
    </>
  )
}