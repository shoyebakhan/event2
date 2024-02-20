import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, image} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import {Image} from "@nextui-org/react";

function Heropage() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding : "0.5px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0,
          }
        }
      ]
    };
  const slidersdetails = [
    {
      "id": 0,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/4429cf6h/flower-1.jpg",
      "heading": 'Joyful Toast & Fare',
      "sub_heading": "Let's Eat, Drink, and Celebrate",
      "disc": 'Timeless grace unfolds on linen-draped tables, where laughter and fine fare intertwine.',
    },
    {
      "id": 1,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/C1B9hLSp/pexels-best-wedding-photographers-india-4552397.jpg",
      "heading": 'Rang Barse!',
      "sub_heading": "A Baarat Bursting with Joy and Music",
      "disc": 'Dhol thunders, colors explode, and joyous revelry spills into vibrant bazaars - celebrate the grand procession in style!',
    },
    {
      "id": 2,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/T11tTTmv/pexels-asad-photo-maldives-169190.jpg",
      "heading": 'Under the Glimmering Lights',
      "sub_heading": 'A Table Adorned with Delight',
      "disc": 'The table at which the main meal of the day is served, or the occasion when this meal is served',
    },
    {
      "id": 3,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/wT6wqcXQ/pexels-rene-asmussen-1405528.jpg",
      "heading": 'Capturing Birthday Bliss',
      "sub_heading": 'Celebrating Another Year of Joy',
      "disc": 'Immerse yourself in the vibrant colors and infectious laughter of our birthday celebrations, where every snapshot tells a story of happiness and togetherness.',
    },
    {
      "id": 4,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/44BwLHcL/pexels-spora-weddings-15698752.jpg",
      "heading": 'Radiant Rhythms',
      "sub_heading": "Where Love Blossoms and Memories Flourish",
      "disc": "Step into a world of timeless elegance and cherished traditions, where every moment is a testament to love's enduring beauty.",
    },
    {
      "id": 5,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/4xmf003K/chuttersnap-a-En-H4h-J-Mrs-unsplash-1.jpg",
      "heading": 'Savor the Flavor',
      "sub_heading": 'Where Presentation Meets Palate',
      "disc": 'Discover plates adorned with vibrant colors and intricate designs, where every bite is a feast for both the eyes and the palate."',
    },
    {
      "id": 6,
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/htVqdRZq/pexels-cottonbro-studio-3171815.jpg",
      "heading": 'Time to Celebrate!',
      "sub_heading": 'Where Every Moment is a Celebration!',
      "disc": "Get ready to have a blast at our party! We've got great music, dancing, and lots of fun waiting for you.",
    },
]
const mobiledetails = [
  {
    "author": "Alejandro Escamilla",
    "download_url": "https://i.postimg.cc/htVqdRZq/pexels-cottonbro-studio-3171815.jpg",
    "heading": 'Mystery Under the Masquerade',
    "sub_heading": 'Disco Divas & Dudes',
    "disc": "",
  }
]
  return (
    <div id="home" className="slider-container overflow-hidden ">
      <Slider {...settings} className=" iPhone6+and7+and8+:hidden iPhone4and4S:hidden" key={slidersdetails.id}>
                {slidersdetails.map((image) => 
                    <div className="relative" key={image.id}>
                        <Image src={image.download_url} alt={image.author} isZoomed isBlurred radius="none" className=" self-center brightness-50 h-[650px] w-[1600px] iPadPro10.5:w-[1024px] iPad1and2andMiniandAir:w-[800px] iPad1and2andMiniandAir:h-[400px]"/>
                        <div id="content-sec" className="absolute z-10 top-[20%] right-[10%] max-w-[50%] text-right">
                          <h1 className="heading_text text-8xl text-white capitalize iPadPro12.9:text-6xl iPad1and2andMiniandAir:text-5xl iPhone6+and7+and8+:text-4xl iPhone6and6Sand7and8:text-3xl iPhone4and4S:text-xl">{image.heading}</h1>
                          <h2 id="subheading-tag" className="text-4xl iPadPro12.9:text-2xl iPad1and2andMiniandAir:text-xl iPhone6+and7+and8+:text-lg iPhone6and6Sand7and8:text-md iPhone4and4S:text-sm">{image.sub_heading}</h2>
                          <p className="text-2xl my-3 text-white/80 iPadPro12.9:text-md iPad1and2andMiniandAir:text-sm iPhone6and6Sand7and8:hidden iPhone4and4S:hidden">{image.disc}</p>
                          <Button className="bg-emerald-900 text-white">GET STARTED FOR FREE <FaArrowRightLong /></Button>
                        </div>
                    </div>
                )}
      </Slider>
      <div className="hidden relative iPhone6+and7+and8+:block iPhone4and4S:block">
        <Image isZoomed isBlurred radius="none" src="https://i.postimg.cc/PxHRmQky/pexels-mat-brown-1395967.jpg" alt="not found" className="h-[auto] w-[500px] brightness-[30%]" />
        <div className="absolute z-10 top-[25%] left-[5%] max-w-[100%] text-left">
          <h1 className="text-4xl uppercase">{mobiledetails[0].heading}</h1>
          <h2 id="mobile_subtitle" className="text-2xl my-2">{mobiledetails[0].sub_heading}</h2>
          <Button className="bg-emerald-900 text-white">GET STARTED FOR FREE <FaArrowRightLong /></Button>
        </div>
      </div>
    </div>
  );
}
export default Heropage;