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
            
            <button class="signout-btn" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
            <span v-if="isLoggedIn">{{ currentUser }}</span>
        </nav>
    </div>
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

<style scoped>
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