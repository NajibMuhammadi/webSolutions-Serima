import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/gallery/om-oss.png";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
    title: "Om oss – WebSolutions Serima | Kreativa webblösningar för alla",
    description:
        "WebSolutions Serima är ett engagerat team som brinner för att skapa snygga, snabba och smarta webblösningar. Vi hjälper både privatpersoner, företag och organisationer att lyckas digitalt.",
    keywords:
        "om oss, WebSolutions Serima, webbutveckling, webbdesign, digitala lösningar, hemsida, webbapp, kreativa webblösningar, digital utveckling",
};

const AboutUsPage = () => {
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo />
                {/* header end */}
                <main>
                    {/* breadcrumb start */}
                    <BreadcrumbOne
                        title="Om WebSolutions"
                        subtitle="Vi skapar moderna webbupplevelser som hjälper företag att växa digitalt."
                        page="Om oss"
                        bg_img={about_bg}
                        shape={shape}
                        style_2={true}
                    />
                    {/* breadcrumb end */}

                    {/* text feature one area start */}
                    <TextFeatureOne style_2={true} />
                    {/* text feature one area end */}

                    {/* block feature one area start */}
                    {/* <BlockFeatureOne style_2={true} /> */}
                    {/* block feature one area end */}

                    {/* text feature one area start */}
                    <TextFeatureThree style_2={true} />
                    {/* text feature one area end */}

                    {/* feedback one start */}
                    {/* <FeedbackOne cls="top-border pt-80 pb-80" /> */}
                    {/* feedback one end */}

                    {/* partner logo start */}
                    {/* <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div> */}
                    {/* partner logo end */}

                    {/* team three start */}
                    {/* <TeamSectionThree /> */}
                    {/* team three end */}

                    {/* blogs start */}
                    {/* <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" /> */}
                    {/* blogs end */}

                    {/* fancy banner three start */}
                    {/* <FancyBannerThree /> */}
                    {/* fancy banner three end */}

                    {/* news letter start */}
                    {/* <NewsletterBanner /> */}
                    {/* news letter end */}
                </main>

                {/* footer start */}
                <FooterOne />
                {/* footer end */}
            </div>
        </Wrapper>
    );
};

export default AboutUsPage;
