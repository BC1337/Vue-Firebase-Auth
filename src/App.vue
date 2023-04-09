<template>
  <div class="dark-mode-wrapper">
      <p>Dark Mode</p>
      <label class="switch">
        <input type="checkbox" v-model="isDark">
        <span class="slider"></span>
      </label>
    </div>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/register">Register</router-link> 
    <router-link to="/sign-in">Sign-in</router-link>
    <router-link to="/feed">Feed</router-link>
    <router-link to="/create-blog">Create Blog</router-link>
    <button class="signout-btn" @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router'; 
import { useDark } from '@vueuse/core';

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

  // dark mode logic
  const isDark = useDark({
    selector: 'body', 
    attribute: 'theme',
    valueDark: 'custom-dark',
    valueLight: 'custom-light',
  });
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

.signout-btn {
    height: 25px;
    width: 100px;
    margin-top: -2px;
    border-radius: 8px;
    border: none;
    background-color: #42b983;
    color: white;
    font-size: medium;
    font-weight: bold;
  }
  /* dark mode wrapper */
  .dark-mode-wrapper{
    display: block;
    position: absolute;
    float: left;
  }
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #42b983;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42b983;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

  /*  dark mode themes  */
  [theme='custom-dark'] {
    background: #16171d;
    color: #fff;
  }

  [theme='custom-dark'] h1, h2 {
    color: #42b983;
  }

  [theme='custom-dark'] p {
    color: #42b983;
  }

  [theme='custom-dark'] a {
    color: #42b983;
  }

  [theme='custom-dark'] li {
    color: #ffffff;
  }

  [theme='custom-dark'] nav a.router-link-active {
  color: #fff;
}

</style>
