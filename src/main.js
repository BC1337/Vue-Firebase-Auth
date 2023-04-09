import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

createApp(App).use(router).mount('#app')
