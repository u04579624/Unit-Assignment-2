export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Add this for Netlify deployment
  nitro: {
    preset: 'netlify'
  }
})