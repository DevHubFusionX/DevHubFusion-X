const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? "/DevHubFusion-X" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/DevHubFusion-X" : "",
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
