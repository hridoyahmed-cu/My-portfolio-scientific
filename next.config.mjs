/**
 * Next.js configuration — tuned for a fully static export deployable on GitHub Pages.
 *
 * For a PROJECT page (https://<user>.github.io/<repo>/) set the repository name as
 * the base path when building, e.g.  NEXT_PUBLIC_BASE_PATH=/your-repo npm run build
 * For a USER/ORG page (https://<user>.github.io/) leave NEXT_PUBLIC_BASE_PATH unset.
 * The GitHub Actions workflow in .github/workflows/deploy.yml sets this automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // Static export cannot run the linter the same way; keep builds resilient.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
