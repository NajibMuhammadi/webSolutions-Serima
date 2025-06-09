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
    title: "WebSolutions Serima – Modern webbdesign & smarta digitala lösningar",
    description:
        "Vi skapar moderna hemsidor, webbappar och digitala lösningar för privatpersoner, föreningar, företag och startups. Med fokus på design, funktion och synlighet online.",
    keywords:
        "webbdesign, webbutveckling, hemsida, hemsidor, digitala lösningar, SEO, digital marknadsföring, webbappar, WebSolutions Serima, Gävle, responsiv design, Next.js, WordPress",
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
