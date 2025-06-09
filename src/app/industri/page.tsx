import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import shape from "@/assets/images/shape/shape_26.svg";
import FooterOne from "@/layout/footer/footer-one";
import ServiceIndustri from "@/components/services/service-industri";

export const metadata: Metadata = {
    title: "Digitala tjänster för industrin | WebSolutions Serima",
    description:
        "Upptäck skräddarsydda digitala lösningar för industriföretag. Vi erbjuder webbdesign, SEO och digital marknadsföring som stärker din industriella verksamhet online.",
    keywords:
        "digitala tjänster industri, industri webbdesign, SEO för industri, digital marknadsföring industri, webblösningar industri, WebSolutions Serima",
};

const ServicePage = () => {
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo />
                {/* header end */}
                <main>
                    {/* breadcrumb start */}
                    <BreadcrumbOne
                        title="Våra tjänster för industri"
                        subtitle="Våra tjänster för industri – vi levererar moderna digitala lösningar som stärker din verksamhet online."
                        page="Tjänster för industri"
                        shape={shape}
                        bg_img={service_bg}
                        style_2={true}
                        cls="me-xxl-4 me-lg-5"
                    />
                    {/* breadcrumb end */}

                    {/* service v1 area start */}
                    <ServiceIndustri />
                    {/* service v1 area end */}

                    {/* fancy banner three start */}
                    {/* <FancyBannerThree /> */}
                    {/* fancy banner three end */}

                    {/* news letter start */}
                    {/* <NewsletterBanner/> */}
                    {/* news letter end */}
                </main>

                {/* footer start */}
                <FooterOne />
                {/* footer end */}
            </div>
        </Wrapper>
    );
};

export default ServicePage;
