import React from 'react';
import { Image } from 'react-bootstrap';
import CardImg1 from '../assets/images/character/char1.png';
import CardImg2 from '../assets/images/character/char2.png';
import CardImg3 from '../assets/images/character/char6.png';

export default function Swiper() {
const mult_slider_style = {
    display: "flex", width: "100%",
}
    return (
        <>
            <div className="swip_cont">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper" style={mult_slider_style}>
                        <div class="swiper-slide">
                            <Image src={CardImg1} className="img-fluid" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={CardImg2} className="img-fluid" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={CardImg2} className="img-fluid" />
                        </div>
                        <div class="swiper-slide">
                            <Image src={CardImg1} className="img-fluid" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={CardImg2} className="img-fluid" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={CardImg2} className="img-fluid" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
            </div>
            </div>    
        </>
    )
}