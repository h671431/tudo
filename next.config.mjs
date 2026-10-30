import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silences the "multiple lockfiles" warning when other package-lock.json files exist higher up.
  outputFileTracingRoot: here,
  // Basic security headers on every page. The content security policy only
  // allows our own files, plus Web3Forms for the forms; it is left off in
  // development because the dev server needs eval.
  async headers() {
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    if (process.env.NODE_ENV === "production") {
      headers.push({
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self'",
          "connect-src 'self' https://api.web3forms.com",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; "),
      });
    }
    return [{ source: "/:path*", headers }];
  },
  // Old pages that were merged into the new structure.
  async redirects() {
    return [
      { source: "/ecd", destination: "/contact", permanent: false },
      { source: "/ngo", destination: "/contact", permanent: false },
      { source: "/brands", destination: "/contact", permanent: false },
      { source: "/future", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
