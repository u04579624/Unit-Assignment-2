<!-- components/Navbar.vue -->
<template>
    <nav class="navbar">
      <div class="container navbar-container">
        <NuxtLink to="/" class="logo">My Portfolio</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    text-decoration: none;
  }
  
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #0066cc;
  }
  </style>