<!-- components/CatFactWidget.vue -->
<template>
    <div class="cat-fact-widget">
      <div v-if="loading">Loading cat fact...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <p>{{ catFact }}</p>
        <button @click="fetchCatFact">Get New Fact</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const catFact = ref('');
  const loading = ref(true);
  const error = ref(null);
  
  const fetchCatFact = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      
      const data = await response.json();
      catFact.value = data.fact;
    } catch (err) {
      error.value = 'Failed to load cat fact. Please try again.';
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchCatFact();
  });
  </script>
  
  <style scoped>
  .cat-fact-widget {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
  
  button {
    background-color: #5bc0de;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  button:hover {
    background-color: #46b8da;
  }
  </style>