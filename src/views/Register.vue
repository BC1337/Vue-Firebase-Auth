<template>
  <div class="register-wrapper">
    <h1>Register An Account</h1>
    <input type="text" placeholder="Email" v-model="email"  @keydown.enter="register">
    <input type="password" placeholder="Password" v-model="password"  @keydown.enter="register">
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In With Google</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup, 
} from 'firebase/auth';
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
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.message)
    });
}
</script>

<style scoped>
  .register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;
  }

  input {
    width: 400px;
    height: 40px;
    margin: 10px;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-size: medium;
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

  @media screen and (max-width: 768px) {
    .register-wrapper {
      margin: 20px;
    }

    input {
      width: 80%;
    }

    button {
      width: 80%;
    }
  }
</style>