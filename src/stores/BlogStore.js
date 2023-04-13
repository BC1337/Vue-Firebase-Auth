import { defineStore } from 'pinia';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  }),
  actions: {
    addTask(task) {
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
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        // Update the blog post with the new title and content
        this.tasks[index].title = newTitle;
        this.tasks[index].content = newContent;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    },
  },
})