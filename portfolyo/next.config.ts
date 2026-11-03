import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lint'i `npm run lint` ile ayrı çalıştır; bir uyarı yüzünden Vercel yayını durmasın.
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
};

export default nextConfig;
