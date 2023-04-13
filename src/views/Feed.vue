<template>
    <div>
        <h1>Feed</h1>
        <div class="task-output">
         <BlogCard v-for="task in tasks"
            :key="task.id"
            :title="task.title"
            :content="task.content"
            :id="task.id"
            :deleteBlogPost="store.deleteBlogPost"
            />
        </div>
    </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/BlogStore'
import BlogCard from '@/components/BlogCard.vue';

const store = useBlogStore()
const tasks = store.tasks
</script>

<style scoped>
 .card-wrapper {
    display: flex;
    justify-content: center;
 }
</style>