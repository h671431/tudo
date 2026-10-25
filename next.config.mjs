import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silences the "multiple lockfiles" warning when other package-lock.json files exist higher up.
  outputFileTracingRoot: here,
};

export default nextConfig;
