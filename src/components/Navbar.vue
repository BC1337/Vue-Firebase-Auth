<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/feed">Feed</router-link>
            <router-link to="/create-blog">Create Blog</router-link>
            <template v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link> 
            <router-link to="/sign-in">Sign-in</router-link>
            </template>
            <span v-if="isLoggedIn">{{ currentUserEmail }}</span>
            <button class="signout-btn" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
            <p v-if="isLoggedIn">{{ currentUser }}</p>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router'; 


  const router = useRouter()
  const isLoggedIn = ref(false)
  const currentUserEmail = ref('');

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
        currentUserEmail.value = user.email;
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

<style scoped>
span{
    border: 1px solid #dd5115;
    padding: 10px;
    margin-top: -9px;
    color:#dd5115;
    font-weight: bold;
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

.signout-btn {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: -10px;
  }
</style>