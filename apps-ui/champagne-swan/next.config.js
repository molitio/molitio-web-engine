/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    loader: "default",
    deviceSizes: [576, 768, 992, 1200, 1400],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        pathname: "/filestore.molitio.org/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },

          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Access-Control-Allow-Origin",
            value:
              "https://s3.eu-west-1.amazonaws.comfilestore.molitio.org https://fonts.googleapis.com https://fonts.gstatic.com ",
          },
          {
            key: "Content-Security-Policy",

            value:
              process.env.NODE_ENV === "development"
                ? "" /* `
                    script-src 'strict-dynamic' 'nonce-kX41H2LmrDTHXwBZ9uhRBBDS'; 
                  ` */
                : "" /* `
                    base-uri 'self';
                    object-src 'none';
                    script-src 'strict-dynamic' 'nonce-${process.env.NONCE}'; 
                    style-src 'self' *.jelizaclean.com/ *.vercel.app/ *.fonts.googleapis.com/;
                    default-src 'self' *.jelizaclean.com/ *.vercel.app/ *.amazonaws.com/filestore.molitio.org/;
                    font-src 'self' *.jelizaclean.com/ *.vercel.app/ *.fonts.googleapis.com/ *.fonts.gstatic.com/ *.amazonaws.com/filestore.molitio.org/;  
                    ` */
                    /* TODO: find solution for a more safe approach with hash or nonce, for ssr and static 
                    script-src 'strict-dynamic' 'nonce-kX41H2LmrDTHXwBZ9uhRBBDS' ;  */
                    .replace(/\s{2,}/g, " ")
                    .trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
