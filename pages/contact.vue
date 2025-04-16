<!-- pages/contact.vue -->
<template>
    <div class="container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 20px;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
  }
  
  button {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0055aa;
  }
  </style>