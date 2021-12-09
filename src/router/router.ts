import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/views/Layout/Layout.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      label: '首页',
    },
    children: [
      {
        path: 'home',
        name: 'homeIndex',
        meta: {
          label: '主控',
        },

        component: () => import('@/views/Home/Home.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
