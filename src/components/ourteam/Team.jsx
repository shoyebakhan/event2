import React from "react";
// import {Avatar} from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function Team() {
    const imagesetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    const team = [
        {
            name: 'hemant',
            job_role: 'programmer',
            image_url: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            name: 'karan',
            job_role: 'problem solver'
        },
        {
            name: 'prashant',
            job_role: 'co-founder'
        },
        {
            name: 'hemant',
            job_role: 'programmer'
        },
        {
            name: 'karan',
            job_role: 'problem solver'
        },
        {
            name: 'prashant',
            job_role: 'co-founder'
        },
        {
            name: 'hemant',
            job_role: 'programmer'
        },
        {
            name: 'karan',
            job_role: 'problem solver'
        },
        {
            name: 'prashant',
            job_role: 'co-founder'
        },
        {
            name: 'hemant',
            job_role: 'programmer'
        },
        {
            name: 'karan',
            job_role: 'problem solver'
        },
        {
            name: 'prashant',
            job_role: 'co-founder'
        },
        {
            name: 'hemant',
            job_role: 'programmer'
        },
        {
            name: 'karan',
            job_role: 'problem solver'
        },
        {
            name: 'prashant',
            job_role: 'co-founder'
        },
    ]
  return (
        <div className="overflow-hidden h-[500px] py-12 bg-slate-700">
            <Slider {...imagesetting} className="text-center p-4">
                {team.map((tdetails) => {
                    return(
                        <Stack direction="row" className="bg-pink-500 " >
                            {/* <Avatar src={tdetails.image_url}   /> */}
                            <Avatar alt="Remy Sharp" src={tdetails.image_url} sx={{ width: 96, height:96,}} className="justify-self-center"/>
                            <h1>{tdetails.name}</h1>
                            <p>{tdetails.job_role}</p>
                        </Stack>
                        )
                })}
        </Slider>
        </div>
  );
}


{/* <Stack direction="row" spacing={2}>

<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
</Stack> */}