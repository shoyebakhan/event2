import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './heropage.css'
import {Button, ButtonGroup} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

function Heropage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    centerPadding: "100px",
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "100px",

          }
        }
      ]
    };
  const images = [
    {
      "id": "0",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "download_url": "https://picsum.photos/id/0/5000/3333"
    },
    {
      "id": "1",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/LNRyGwIJr5c",
      "download_url": "https://picsum.photos/id/1/5000/3333"
    },
    {
      "id": "2",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/N7XodRrbzS0",
      "download_url": "https://picsum.photos/id/2/5000/3333"
    },
    {
      "id": "3",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/Dl6jeyfihLk",
      "download_url": "https://picsum.photos/id/3/5000/3333"
    },
    {
      "id": "4",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/y83Je1OC6Wc",
      "download_url": "https://picsum.photos/id/4/5000/3333"
    },
    {
      "id": "5",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3334,
      "url": "https://unsplash.com/photos/LF8gK8-HGSg",
      "download_url": "https://picsum.photos/id/5/5000/3334"
    },
    {
      "id": "6",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/tAKXap853rY",
      "download_url": "https://picsum.photos/id/6/5000/3333"
    },
]
  return (
    <div className="slider-container">
      <Slider {...settings} className="">
                {images.map((image) => 
                    <div className="relative">
                        <img src={image.download_url} alt={image.author} />
                        <h1 className="text-9xl text-white absolute z-10 top-[300px] left-[500px] opacity-40">PARTY</h1>
                        <Button color="primary" className="absolute top-[450px] left-[600px] bg-">GET STARTED <FaArrowRightLong /></Button>
                    </div>
                )}
      </Slider>
    </div>
  );
}
export default Heropage;