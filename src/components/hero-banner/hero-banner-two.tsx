"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import bg_1 from "@/assets/images/gallery/img_04.jpg";
import bg_2 from "@/assets/images/gallery/img_05.jpg";
import icon from "@/assets/images/icon/icon_02.svg";

// slider bg
const slider_bg = [bg_1, bg_2];
// slider setting
const slider_setting = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
    return (
        <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
            <Slider {...slider_setting} className="hero-slider-one m0">
                {slider_bg.map((bg, i) => (
                    <div className="item m0" key={i}>
                        <div
                            className="hero-img"
                            style={{ backgroundImage: `url(${bg.src})` }}
                        ></div>
                    </div>
                ))}
            </Slider>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 ms-auto">
                        <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                            Välkommen till
                            <br />
                            din digitala <br />
                            partner
                        </h1>
                        <p
                            className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            Vi hjälper företag att växa digitalt med moderna och
                            användarvänliga webbplatser. Oavsett om du behöver
                            en enkel WordPress-sida eller en skräddarsydd
                            webbapplikation, levererar vi lösningar som håller –
                            idag och i framtiden.
                        </p>
                        <Link
                            href="/kontakta-oss"
                            className="btn-two icon-link wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <span>kontakta oss</span>
                            <Image
                                src={icon}
                                alt="icon"
                                className="lazy-img icon ms-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Link
                href="/kontakta-oss"
                className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
                target="_blank"
            >
                <i className="bi bi-arrow-up-right"></i>
            </Link>
        </div>
    );
};

export default HeroBannerTwo;
