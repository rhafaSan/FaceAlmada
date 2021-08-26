import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import CriarPost from '@/views/CriarPost.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/criar-post',
      component: CriarPost
    }
  ]
})

export default router;