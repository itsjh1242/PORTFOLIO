/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://itsjh1242.github.io/portfolio" : "",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

export default nextConfig;
