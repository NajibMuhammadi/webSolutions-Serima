/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://websolutions.serima.se",
    generateRobotsTxt: true, // skapar robots.txt automatiskt
    sitemapSize: 5000,
    changefreq: "monthly",
    priority: 0.7,
    exclude: ["/admin", "/dashboard"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};
