/** @type {import('next').NextConfig} */
const nextConfig = {
      turbopack: {
    // Turbopack-specific configurations
  },
  
  // External packages configuration (moved from experimental)
  serverExternalPackages: ['@tailwindcss/postcss'],
}

export default nextConfig;
