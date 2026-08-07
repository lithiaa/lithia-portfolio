/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
