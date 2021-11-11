import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../banner/personal1.png"
import banner2 from "../../../banner/personal2.jpg"
import banner3 from "../../../banner/personal3.jpg"


const Banner = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>GENERAL DENTISTRY</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>COSMETIC DENTISTRY</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>EMERGENCY DENTAL CARE</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default Banner;