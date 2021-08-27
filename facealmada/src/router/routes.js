import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import CriarPost from '@/views/CriarPost.vue';
import Post from '@/views/Post.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/criar-post',
      component: CriarPost
    },
    {
      path: '/post/:id',
      component: Post
    }
  ]
})

export default router;