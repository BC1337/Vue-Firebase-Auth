import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';


export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  }),
  actions: {
    addTask(task) {
      task.id = uuidv4(); // Generate a unique id for the task
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    deleteBlogPost(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    },
    editBlogPost(id, newTitle, newContent) {
      const task = this.tasks.find(task => task.id === id); // Find the task with the given id
      if (task) {
        // Update the blog post with the new title and content
        task.title = newTitle;
        task.content = newContent;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    },
  },
})