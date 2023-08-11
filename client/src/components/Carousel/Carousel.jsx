import React, { Component } from "react";
import "./Carousel.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };
        return (
            <div className="overflow-hidden" >
                <Slider {...settings} >
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]" >

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                    <div className="border-2 border-votosRed h-96  rounded-[1rem]">

                    </div>
                </Slider>
            </div>
        );
    }
}