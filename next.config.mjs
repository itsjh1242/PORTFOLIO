/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/loader.ts",
  },
  output: "export",
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://itsjh1242.github.io/portfolio/" : "",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
