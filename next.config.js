/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['src/*'],
    },
  },
  pageExtensions: ['page.tsx', 'api.ts'],
}

// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
// const withVanillaExtract = createVanillaExtractPlugin()

module.exports = nextConfig
