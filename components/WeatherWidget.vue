<!-- components/WeatherWidget.vue -->
<template>
    <div class="weather-widget">
      <div v-if="loading">Loading weather data...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else class="weather-content">
        <div class="location-input">
          <input 
            type="text" 
            v-model="city" 
            placeholder="Enter city name" 
            @keyup.enter="fetchWeather"
          />
          <button @click="fetchWeather">Search</button>
        </div>
        
        <div v-if="weatherData" class="weather-info">
          <div class="temperature">{{ Math.round(weatherData.main.temp) }}°C</div>
          <div>{{ weatherData.weather[0].main }}</div>
          <div>Humidity: {{ weatherData.main.humidity }}%</div>
          <div>Wind: {{ Math.round(weatherData.wind.speed * 3.6) }} km/h</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const API_KEY = 'ec1b4483d902fb1458c95734f216abf2'; // Using the API key you provided
  const weatherData = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const city = ref('Pretoria'); // Default city
  
  const fetchWeather = async () => {
    if (!city.value.trim()) {
      error.value = 'Please enter a city name';
      return;
    }
    
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        }
        throw new Error('Failed to fetch weather data');
      }
      
      const data = await response.json();
      weatherData.value = data;
    } catch (err) {
      error.value = err.message || 'Failed to load weather. Please try again.';
      weatherData.value = null;
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchWeather();
  });
  </script>
  
  <style scoped>
  .weather-widget {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
  
  .location-input {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .location-input input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
  }
  
  .location-input button {
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  
  .weather-info {
    margin-top: 1rem;
  }
  
  .temperature {
    font-size: 2rem;
    font-weight: bold;
  }
  </style>