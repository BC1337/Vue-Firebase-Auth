<template>
  <div class="card-wrapper">
    <div class="blog-card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <button class="edit-button" @click="toggleEditMode">Edit</button>
      <button @click="deleteBlogPost(id)">X</button>
      <form v-if="editMode" @submit.prevent="saveChanges">
        <input type="text" v-model="newTitle" placeholder="New title">
        <textarea v-model="newContent" placeholder="New content"></textarea>
        <div class="edit-group">
          <button class="save-button" type="submit">Save</button>
          <button class="cancel-button" @click="toggleEditMode">Cancel</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'
  import { useBlogStore } from '../stores/BlogStore'
  const props = defineProps(['title', 'content', 'id'])
  const blogStore = useBlogStore()
  const editMode = ref(false)
  const newTitle = ref('')
  const newContent = ref('')

  const deleteBlogPost = () => {
    blogStore.deleteBlogPost(props.id)
  }

  const toggleEditMode = () => {
    // Toggle the edit mode
    editMode.value = !editMode.value
    // Set the initial value of the newTitle and newContent input fields
    newTitle.value = props.title
    newContent.value = props.content
  }

  const saveChanges = () => {
    blogStore.editBlogPost(props.id, newTitle.value, newContent.value)
    // Exit edit mode
    editMode.value = false
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

  button{
    text-align: center;
    align-items: center;
    display: flex;
    float: right;
    color: white;
    background: crimson;
  }

  input {
    margin-left: 4vh;
  }
.edit-group{
  display: flex;
  justify-content: center;
  gap: 135px;
}

  .edit-button {
    background: #42b983;
    margin-top: -10vh;
    float: left;
  }

  .save-button {
    display: flex;
    float: left;
    background: #42b983;
    
  }

  .cancel-button{
    display: flex;
    float: left;
  }
  </style>
  