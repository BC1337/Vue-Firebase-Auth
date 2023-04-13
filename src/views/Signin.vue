<template>
  <div class="register-wrapper">
    <h1>Sign In</h1>
    <div class="input-group">
      <input type="text" placeholder="Email" v-model="email" @keydown.enter="register" />
    </div>
    <div class="input-group">
      <input type="password" placeholder="Password" v-model="password" @keydown.enter="register" />
    </div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <div class="button-group">
      <button @click="register">Submit</button>
      <button @click="signInWithGoogle">Sign In With Google</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!');
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email';
          break;
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found';
          break;
        case 'auth/wrong-password':
          errMsg.value = 'Wrong password';
          break;
        default:
          errMsg.value = 'Email or password was incorrect';
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
</script>

<style scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
}

input {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  font-size: medium;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

button {
  height: 35px;
  width: 48%;
  border-radius: 8px;
  border: none;
  background-color: #42b983;
  color: white;
  font-size: medium;
  font-weight: bold;
}
</style>