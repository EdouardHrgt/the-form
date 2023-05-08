import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '', name: 'info', component: () => import('@/views/InfoView.vue') },
  { path: '/select-plan', name: 'plan', component: () => import('@/views/PlanView.vue') },
  { path: '/Add-on', name: 'add', component: () => import('@/views/AddOnsView.vue') },
  { path: '/finishing-up', name: 'finishing', component: () => import('@/views/FinishingView.vue') },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
