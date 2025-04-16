export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png'], // Include .JPG and other image formats
  },
  
  // Add this for Netlify deployment
  nitro: {
    preset: 'netlify'
  }
})