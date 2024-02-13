import React from "react";

//import avatar
import {Avatar} from "@nextui-org/react";

// import slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from '@mui/material/Stack';

// import icons
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
    const imagesetting = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 0
                }
            }
        ]
    };
    const team = [
        {
            name: 'Ashutosh Jain',
            job_role: 'Senior Project Head',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Prashant Saraswat',
            job_role: 'Project Manager',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Shivam Sharma',
            job_role: 'Marketing Head',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Mohit Saraswat',
            job_role: 'Marketing Head (CRM)',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Rudrani Pal',
            job_role: 'React Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Farheen Khan',
            job_role: 'Front-end Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Kanishka Singhal',
            job_role: 'JS Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Ayush Goyal',
            job_role: 'Front-end Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Hemant Bhargav',
            job_role: 'Full Stack Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Karan Jadaun',
            job_role: 'MERN Stack Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Salman Khan',
            job_role: 'Front-end Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Sufiyan Khan',
            job_role: 'Front-end Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Sambhav Goswami',
            job_role: 'Figma Designer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Tanishk Jain',
            job_role: 'Front-end Developer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Abbas Khan',
            job_role: 'Template Designer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: 'Arpit Jain',
            job_role: 'Front-end Developer',
            // image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
    ]
  return (
        <div className="overflow-hidden h-[500px] py-12 ">
            <h3 className="uppercase font-semibold text-center text-6xl mb-12">our leaders</h3>
            <Slider {...imagesetting} className="">
                {team.map((tdetails) => {
                    return(
                        <Stack direction="row" className="py-4" >
                                <div className="flex flex-col items-center justify-center">
                                    <Avatar src={tdetails.image_url} className="w-44 h-44 text-large" />
                                    <h2 className="font-bold text-2xl uppercase mt-6">{tdetails.name}</h2>
                                    <p className="text-lg">{tdetails.job_role}</p>
                                    <div className="flex  w-[80px]">
                                        <div className="w-full inline-flex justify-evenly mt-3">
                                            <FaXTwitter className="text-xl " path=""/>
                                            <FaLinkedin className="text-xl text-blue-600" path=""/>
                                        </div>
                                    </div>
                                </div>
                        </Stack>
                        )
                })}
        </Slider>
        </div>
  );
}