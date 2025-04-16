<!-- pages/projects.vue -->
<template>
    <div class="container">
      <h1>My Projects</h1>
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      title: "IMY 110 Website",
      description: "I made a website in one of my previous modules called IMY110, this Website was made for the rapper Dave, I had a signup form for his newsletter and a gallery of photos."
    },
    {
      title: "3D Room",
      description: "I made a 3D room in Blender, this is to date one of my favorite projects. I made the room with lighting and all sorts of smaller objects around the room, this took a while and I loved it."
    },
    {
      title: "Turing machine",
      description: "I  once had the bright idea of trying to code a turing machine, This was a very stupid idea but I worked through it and in the end I was able to add and change the variables to fit almost any truing machine."
    }
  ];
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 20px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .project-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>