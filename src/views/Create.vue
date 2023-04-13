<template>
  <div>
    <h1>Create A Blog Post</h1>
    <form>
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="content"></textarea>
      </div>
      <div>
        <button type="button" @click="addTask">Add Task</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/BlogStore'
import { ref } from 'vue'

const store = useBlogStore()
const title = ref('')
const content = ref('')

const addTask = async () => {
  const task = { 
    title: title.value, 
    content: content.value,
  }
  await store.addTask(task)
  title.value = ''
  content.value = ''

  alert('Budget Toast... Post successfully added to feed!')
}
</script>
