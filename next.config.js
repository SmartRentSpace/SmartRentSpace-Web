/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  transpilePackages: ["react-syntax-highlighter", "swagger-client", "swagger-ui-react"],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  //   webpack: (config) => {
  //     config.externals.push("pino-pretty", "lokijs", "encoding");
  //     return config;
  //   },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
