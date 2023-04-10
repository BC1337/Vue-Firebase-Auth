import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useBlogStore } from './stores/BlogStore'
import router from './router'


import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHBWoMzYH5ZRML9C60UvJJqJIvJV673Ac",
  authDomain: "vue-firebase-auth-5db22.firebaseapp.com",
  projectId: "vue-firebase-auth-5db22",
  storageBucket: "vue-firebase-auth-5db22.appspot.com",
  messagingSenderId: "1051113143691",
  appId: "1:1051113143691:web:29c69b75204a241a54038e"
};

initializeApp(firebaseConfig);

const pinia = createPinia()


const app = createApp(App)
app.use(pinia)

const store = useBlogStore()
app.provide('store', store)

app.use(router)
app.mount('#app')
