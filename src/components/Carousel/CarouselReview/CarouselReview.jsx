import  { Component } from "react";

import "./CarouselReview.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from "react-lazy-load-image-component";


export default class CarouselReview extends Component {
    render() {
        var settings = {
            lazyLoad: true,
            arrows: true,
            infinite: true,
            speed: 500,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
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
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                    }
                },
            ]
        };
        return (
            <Slider {...settings} className="w-[110%] sm:w-8/12" >
                <div className=" h-99  rounded-[1rem]" >
                    <LazyLoadImage
                        src="media/Reviews/Depoimento_1.webp"
                        alt="Depoimento_1"

                        className="object-cover w-full h-full rounded-[1rem]" />
                </div>
                <div className=" h-99  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/Reviews/Depoimento_2.webp"
                        alt="Depoimento_2"

                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-99  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/Reviews/Depoimento_4.webp"
                        alt="Depoimento_4"

                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-99  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/Reviews/Depoimento_5.webp"
                        alt="Depoimento_5"

                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
            </Slider>
        );
    }
}