import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'
import Feed from '../views/Feed.vue'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: Signin,
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/create-blog',
    name: 'Create',
    component: Create,
    meta: {
      requiresAuth: true,
    }
  },
]

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
  } else {
    alert('You dont have access!');
    next('/');
  }
} else {
  next();
}
});


export default router
