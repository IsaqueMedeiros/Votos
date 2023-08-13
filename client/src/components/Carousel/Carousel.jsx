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
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
                    <Slider {...settings} >
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]" >

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                        <div className="border-2 border-votosPink h-96  rounded-[1rem]">

                        </div>
                    </Slider>
        );
    }
}