<template>
  <div class="card-wrapper">
    <div class="blog-card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <button @click="deleteBlogPost(id)">Delete</button>
    </div>
  </div>

  </template>
  
  <script setup>
  import { useBlogStore } from '../stores/BlogStore'
  const props = defineProps(['title', 'content', 'id',])
  const blogStore = useBlogStore()

  const deleteBlogPost = () => {
  blogStore.deleteBlogPost(props.id)
}
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
  