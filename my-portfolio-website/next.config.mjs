/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // Keep the export mode if you want a static build
};

export default nextConfig;
