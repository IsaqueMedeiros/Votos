import React, { Component } from "react";
import "./Carousel.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from "react-lazy-load-image-component";


export default class Carousel extends Component {
    render() {
        var settings = {
            lazyLoad: true,
            dots: true,
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
                <div className=" h-96  rounded-[1rem]" >
                    <LazyLoadImage
                        src="media/carro.webp"
                        alt="Carro"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />
                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/livro.webp"
                        alt="Livro"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/parenteCasamento.webp"
                        alt="ParenteCasamento"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/casalPorta.webp"
                        alt="CasalPorta"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/blackwhite.webp"
                        alt="BlackWhite"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/lightTeam.webp"
                        alt="lightTeam"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/noivosCerimonia.webp"
                        alt="NoivosCerimonia"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
                <div className=" h-96  rounded-[1rem]">
                    <LazyLoadImage
                        src="media/terno.webp"
                        alt="Terno"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full rounded-[1rem]" />

                </div>
            </Slider>
        );
    }
}