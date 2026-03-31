const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 WAJIB

  basePath: "/website-master", // 🔥 ganti sesuai nama repo lo
  assetPrefix: "/website-master/",

  pageExtensions: ["js", "jsx", "mdx"],

  images: {
    unoptimized: true, // 🔥 WAJIB untuk static export
    domains: [
      "assets-global.website-files.com",
      "www.notion.so",
      "notion.so",
      "secure.notion-static.com",
      "prod-files-secure",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);