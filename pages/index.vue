<template>
    <div class="container">
      <section class="hero">
        <div class="hero-content">
          <h1>David</h1>
          <p class="subtitle">Web Developer & Designer</p>
          <p>
            I'm a passionate web developer specializing in modern frontend technologies.
            Currently studying at the University of Pretoria, I focus on creating 
            accessible and performant web experiences.
          </p>
        </div>
        <div class="hero-image">
            <img src="~/assets/ProfilePic.JPG" alt="My Profile Picture">
        </div>
      </section>
      
      <section class="api-section">
        <h2>API Integrations</h2>
        <div class="api-grid">
          <CatFactWidget />
          <WeatherWidget />
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Import components
  import CatFactWidget from '~/components/CatFactWidget.vue';
  import WeatherWidget from '~/components/WeatherWidget.vue';
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 20px;
  }
  
  .hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .hero-content {
    flex: 1;
  }
  
  .hero-image {
    flex: 1;
    text-align: center;
  }
  
  .hero-image img {
    border-radius: 25px;
    max-width: 50%;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .api-section {
    margin-top: 3rem;
  }
  
  .api-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }
    
    .hero-image {
      order: -1;
    }
  }
  </style>