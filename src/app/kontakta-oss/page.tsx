'"use client";'
import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import shape from "@/assets/images/shape/shape_33.svg";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Kontakta WebSolutions Serima | Experter på digitala lösningar för industrin",
  description: "Har du frågor eller vill diskutera hur våra digitala lösningar kan hjälpa din industri? Kontakta WebSolutions Serima för personlig service och professionell rådgivning.",
  keywords: "kontakta oss, digitala lösningar, industri, offertförfrågan, support, webbutveckling, WebSolutions Serima, digital marknadsföring",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Kontakta oss & Frågor"
            subtitle="Vill du ha en offert eller har du frågor? Kontakta oss idag! Vi är här för att hjälpa dig."
            page="Kontakta oss"
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}

          {/* news letter start */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ContactPage;
