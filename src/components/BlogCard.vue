<template>
    <div class="blog-card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      content: String,
    },
  };
  </script>
  
  <style scoped>
  .blog-card {
    width: 80%;
    max-width: 800px;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .blog-card h2 {
    margin-top: 15px;
  }
  </style>
  