'"use client";';
import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import shape from "@/assets/images/shape/shape_33.svg";
import FooterOne from "@/layout/footer/footer-one";
import contact_bg from "@/assets/images/gallery/hero-4.png";

export const metadata: Metadata = {
    title: "Kontakta WebSolutions Serima | Din partner för webblösningar & digital utveckling",
    description:
        "Vill du ha en offert eller har du frågor om hemsida, webbapp eller digitala tjänster? Kontakta WebSolutions Serima för snabb och personlig support – vi hjälper dig gärna!",
    keywords:
        "kontakta oss, webblösningar, hemsida, webbapp, digitala tjänster, offertförfrågan, support, webbutveckling, WebSolutions Serima, digital utveckling",
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
                        bg_img={contact_bg}
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
