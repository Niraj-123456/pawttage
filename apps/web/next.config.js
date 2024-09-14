/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/img/ecommerce-images/**",
      },
      {
        protocol: "https",
        hostname: "image.hamropatro.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["ui"],
  reactStrictMode: true,
};

module.exports = nextConfig;
