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

<script>
import { useBlogStore } from '@/stores/BlogStore'
import { ref } from 'vue'


export default {
  setup() {
    const store = useBlogStore()
    const title = ref('')
    const content = ref('')

    function addTask() {
      const task = { title: title.value, content: content.value }
      store.addTask(task)
      title.value = ''
      content.value = ''
      alert('Budget Toast... Post successfully added to feed!')
    }

    return { title, content, addTask}
  },
}
</script>

<style>
label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

input,
textarea {
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  margin-bottom: 1rem;
}

textarea{
  height: 30vh;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
