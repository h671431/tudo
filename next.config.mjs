import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silences the "multiple lockfiles" warning when other package-lock.json files exist higher up.
  outputFileTracingRoot: here,
  // Old pages that were merged into the new structure.
  async redirects() {
    return [
      { source: "/ecd", destination: "/contact", permanent: false },
      { source: "/ngo", destination: "/contact", permanent: false },
      { source: "/brands", destination: "/contact", permanent: false },
      { source: "/teachers", destination: "/workshops", permanent: false },
      { source: "/future", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
