import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FooterOne from "@/layout/footer/footer-one";
import PricingArea from "@/components/pricing/pricing-area";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "WebSolutions Serima – Skräddarsydd webbdesign & digitala lösningar för företag",
    description:
        "WebSolutions Serima hjälper företag i Gävle och hela Sverige med moderna hemsidor, webbapplikationer och digital marknadsföring. Vi skapar webblösningar som växer ditt företag online.",
    keywords:
        "webbdesign, webbutveckling, digitala lösningar, SEO, digital marknadsföring, hemsidor för företag, webbapplikationer, Websolutions Serima, Gävle",
};

export default function HomePage() {
    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo />
                {/* header end */}
                <main>
                    {/* hero banner start */}
                    <HeroBannerTwo />
                    {/* hero banner end */}

                    {/* fancy banner one start */}
                    <FancyBannerOne />
                    {/* fancy banner one end */}

                    {/* block feature one start */}
                    <BlockFeatureOne />
                    {/* block feature one end */}

                    {/* text feature one start */}
                    <TextFeatureOne />
                    {/* text feature one end */}

                    {/* block feature two start */}
                    {/* <BlockFeatureTwo /> */}
                    {/* block feature two end */}

                    {/* block feature three start */}
                    {/* <BlockFeatureThree /> */}
                    {/* block feature three end */}

                    {/* feedback one start */}
                    {/* <FeedbackOne /> */}
                    {/* feedback one end */}

                    {/* team section one start */}
                    {/* <TeamSectionOne /> */}
                    {/* team section one end */}

                    {/* faq section end */}
                    <PricingArea />

                    {/* faq section start */}
                    <FaqSectionOne />

                    {/* blog item start */}
                    {/* <HomeTwoBlogs /> */}
                    {/* blog item end */}

                    {/* fancy banner two start */}
                    {/* <FancyBannerTwo /> */}
                    {/* fancy banner two end */}
                </main>

                {/* footer start */}
                <FooterOne />
                {/* footer end */}
            </div>
        </Wrapper>
    );
}
