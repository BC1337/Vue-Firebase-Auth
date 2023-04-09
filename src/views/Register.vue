<template>
  <div class="register-wrapper">
    <h1>Register An Account</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    console.log('Succesfully registered!')
    router.push('/feed')
  })
};

const signInWithGoogle = () => {

}
</script>

<style scoped>
  .register-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 400px;
    margin: 10px;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
  }
  button {
    height: 35px;
    width: 200px;
    margin: 10px;
    border-radius: 8px;
    border: none;
    background-color: #42b983;
    color: white;
    font-size: medium;
    font-weight: bold;
  }
</style>