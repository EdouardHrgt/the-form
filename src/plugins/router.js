import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '', name: 'info', component: () => import('@/views/InfoView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
