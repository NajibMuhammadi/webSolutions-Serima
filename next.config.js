/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true, // Förbättrar CSS-optimering
        webpackBuildWorker: true, // Aktiverar Webpack-arbetare för bättre prestanda
    },
    swcMinify: true, // Använder SWC för minifiering
    compress: true, // Aktiverar gzip-komprimering

    async headers() {
        return [
            {
                // Statiska assets
                source: "/_next/static/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // Bilder
                source: "/images/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=86400, stale-while-revalidate=604800",
                    },
                ],
            },
            {
                // HTML sidor
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                ],
            },
        ];
    },

    // Webpack konfiguration för att optimera WebSocket och andra problem
    webpack: (config, { dev, isServer }) => {
        // Optimera för produktion
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: "all",
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: "vendors",
                            chunks: "all",
                        },
                    },
                },
            };
        }

        // Undvik WebSocket-problem i produktion
        if (!dev) {
            config.plugins = config.plugins || [];
            config.plugins.push(
                new (require("webpack").DefinePlugin)({
                    "process.env.NODE_ENV": JSON.stringify("production"),
                })
            );
        }

        return config;
    },

    // Compiler optimeringar
    compiler: {
        removeConsole:
            process.env.NODE_ENV === "production"
                ? {
                      exclude: ["error"],
                  }
                : false,
    },

    // Output optimering
    output: "standalone", // Optimerar för deployment

    // Powerade av optimeringar
    poweredByHeader: false, // Tar bort X-Powered-By header
};

module.exports = nextConfig;
