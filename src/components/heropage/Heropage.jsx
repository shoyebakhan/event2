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
    centerPadding: "210px",
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
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/4429cf6h/flower-1.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/C1B9hLSp/pexels-best-wedding-photographers-india-4552397.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/T11tTTmv/pexels-asad-photo-maldives-169190.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/wT6wqcXQ/pexels-rene-asmussen-1405528.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/44BwLHcL/pexels-spora-weddings-15698752.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/4xmf003K/chuttersnap-a-En-H4h-J-Mrs-unsplash-1.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
    {
      "author": "Alejandro Escamilla",
      "download_url": "https://i.postimg.cc/htVqdRZq/pexels-cottonbro-studio-3171815.jpg",
      "heading": 'party',
      "sub_heading": 'click, get started',
      "disc": 'hello this is party time',
    },
]
  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings} className="outline-none border-none">
                {images.map((image) => 
                    <div className="relative">
                        <img src={image.download_url} alt={image.author} className="h-[600px] w-[1080px]"/>
                        <div className="absolute z-10 top-[150px] right-48 max-w-[50%] text-left">
                          <h1 className="text-8xl text-white opacity-45 capitalize ">{image.heading}</h1>
                          <h2 className="text-4xl text-gray-400">{image.sub_heading}</h2>
                          <p className="text-xl text-zinc-400">{image.disc}</p>
                          <Button color="primary" className="bg-emerald-900 mt-3">GET STARTED FOR FREE<FaArrowRightLong /></Button>
                        </div>
                    </div>
                )}
      </Slider>
    </div>
  );
}
export default Heropage;