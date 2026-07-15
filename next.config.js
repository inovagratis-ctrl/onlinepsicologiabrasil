/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domínios permitidos para otimização automática
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'vercel-blob.com',
      },
      {
        protocol: 'https',
        hostname: '*.vercel-blob.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    
    // Formatos modernos otimizados
    formats: ['image/avif', 'image/webp'],
    
    // Tamanhos de device para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Qualidade padrão
    quality: 85,
    
    // Cache TTL (30 dias)
    minimumCacheTTL: 2678400,
    
    // Permitir SVGs
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
    
    // Remote patterns para flexibilidade
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ],
  
  // Compressão
  compress: true,
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'lucide-react'],
    optimizeCss: true,
  },
  
  // SWC minification
  swcMinify: true,
  
  // React strict mode
  reactStrictMode: true,
  
  // PoweredBy header
  poweredByHeader: false,
}

module.exports = nextConfig