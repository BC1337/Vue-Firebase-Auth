<template>
  <div>
    <h1>Blog Feed</h1>
    <div class="task-wrapper">
      <form>
        <div class="task-input">
          <input type="text" placeholder="title of blog post..." v-model="newTaskTitle" />
        </div>
        <div class="task-input">
          <textarea placeholder="blog content..." v-model="newTaskContent"></textarea>
        </div>
        <button @click.prevent="addTask">Submit Task</button>
      </form>
    </div>
    <div class="task-output">
      <BlogCard v-for="task in tasks" :key="id" :title="task.title" :content="task.content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogCard from "../components/BlogCard.vue";

const tasks = ref([]);
const newTaskTitle = ref("");
const newTaskContent = ref("");


const addTask = () => {
  if (newTaskTitle.value !== "" && newTaskContent.value !== "") {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: newTaskTitle.value,
      content: newTaskContent.value,
    });
    newTaskTitle.value = "";
    newTaskContent.value = "";
  }
};
</script>
  
  <style scoped>
  p {
    text-decoration: underline;
  }
  
  ul {
    margin-left: -50px;
    list-style-type: none;
  }
  
  li {
    font-size: 1.5em;
  }
  
  .task-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .task-input {
    margin-bottom: 10px;
  }
  
  textarea {
    border-radius: 1px;
    outline: none;
    width: 400px;
    height: 200px;
    margin: 10px;
    padding: 5px;
  }
  
  button {
    background: #42b983;
    color: white;
    font-weight: bold;
    font-size: medium;
    border-radius: 8px;
    outline: none;
    border: none;
    height: 25px;
    margin-top: 10px;
  }
  
  input[type="text"] {
    border-bottom: 1px solid black;
    padding-left: 20px;
    width: 400px;
    height: 25px;
    margin: 10px;
  }

  .task-output {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .blog-card {
    width: 80%;
    max-width: 800px;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
  }

  .blog-card h2 {
    margin-top: 15px;
  }
  </style>
  