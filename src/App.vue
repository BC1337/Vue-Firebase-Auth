<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/register">Register</router-link> 
    <router-link to="/sign-in">Sign-in</router-link>
    <router-link to="/feed">Feed</router-link>
    <button class="signout-btn" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router'; 

  const router = useRouter()
  const isLoggedIn = ref(false)

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/');
    });
  };

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  padding: 30px;
  gap: 25px;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.signout-btn, button {
    height: 25px;
    width: 100px;
    margin-top: -2px;
    border-radius: 8px;
    border: none;
    background-color: #34b6c7;
    color: white;
    font-size: medium;
    font-weight: bold;
  }
</style>
