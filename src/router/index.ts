import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/vote',
    component: () => import('../views/Vote.vue'),
  },
  {
    path: '/complete/:voteId',
    component: () => import('../views/Complete.vue'),
  },
  {
    path: '/ranking',
    component: () => import('../views/Ranking.vue'),
  },
  {
    path: '/alreadyVoted',
    component: () => import('../views/AlreadyVoted.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
