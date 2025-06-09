import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import shape from "@/assets/images/shape/shape_26.svg";
import ServiceOneArea from "@/components/services/service-v1-area";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Tjänster & Lösningar – WebSolutions Serima",
  description: "Upptäck våra skräddarsydda tjänster och digitala lösningar för företag. Vi hjälper dig med webbutveckling, webbdesign, SEO och digital marknadsföring för att växa online.",
  keywords: "webbutveckling, webbdesign, SEO, digital marknadsföring, företagslösningar, skräddarsydda webblösningar, WebSolutions Serima, tjänster, digitala tjänster",
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
            title="Våra tjänster & lösningar"
            subtitle="Vi levererar moderna digitala lösningar – för företag som vill växa online."
            page="Tjänster"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* service v1 area start */}
          <ServiceOneArea />
          {/* service v1 area end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner/> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ServicePage;
