import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    metadataBase: new URL("https://websolutions.serima.se"),
    title: "WebSolutions Serima – Avancerade webblösningar & modern webbutveckling",
    description:
        "WebSolutions Serima erbjuder avancerade webblösningar och modern webbutveckling för dig som vill stärka din digitala närvaro. Vi skapar skräddarsydda hemsidor, webbappar och digitala tjänster.",
    keywords: [
        "hemsida företag",
        "webbutveckling",
        "webbdesign",
        "WordPress",
        "Next.js",
        "WebSolutions Serima",
        "digital närvaro",
        "webbapplikationer",
        "SEO",
    ],
    robots: "index, follow",
    alternates: {
        canonical: "https://websolutions.serima.se",
    },
    openGraph: {
        title: "WebSolutions Serima – Avancerade webblösningar & modern webbutveckling",
        description:
            "WebSolutions Serima erbjuder avancerade webblösningar och modern webbutveckling för dig som vill stärka din digitala närvaro. Kontakta oss för skräddarsydda hemsidor och webbappar.",
        url: "https://websolutions.serima.se",
        siteName: "WebSolutions Serima",
        images: [
            {
                url: "https://websolutions.serima.se/assets/images/logo/ws.serima.png",
                width: 200,
                height: 27,
                alt: "WebSolutions Serima hemsida",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "WebSolutions Serima – Avancerade webblösningar & modern webbutveckling",
        description:
            "WebSolutions Serima erbjuder avancerade webblösningar och modern webbutveckling för dig som vill stärka din digitala närvaro. Vi skapar skräddarsydda hemsidor, webbappar och digitala tjänster.",
        images: [
            "https://websolutions.serima.se/assets/images/logo/ws.serima.png",
        ],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebSolutions Serima",
    url: "https://websolutions.serima.se",
    logo: "https://websolutions.serima.se/logo.png",
    image: "https://websolutions.serima.se/og-image.png",
    description:
        "WebSolutions Serima erbjuder avancerade webblösningar och modern webbutveckling för dig som vill stärka din digitala närvaro. Vi specialiserar oss på skräddarsydda hemsidor, webbappar och digitala tjänster.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Högbovägen 45",
        addressLocality: "Sandviken",
        postalCode: "811 32",
        addressCountry: "SE",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "026-222 20 10",
        email: "info@serima.se",
        contactType: "Customer Service",
        availableLanguage: ["sv"],
    },
    sameAs: [
        "https://www.facebook.com/websolutions.serima",
        "https://www.instagram.com/websolutions.serima",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="sv">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="WebSolutions Serima" />
                <link rel="canonical" href="https://websolutions.serima.se" />
                {/* Structured data for SEO */}
                <script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
