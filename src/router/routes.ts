import type { RouteRecordRaw } from 'vue-router'

/** 路由信息 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    redirect: '/single-player',
    component: () => import('@/src/pages/home/Home.vue'),
    children: [
      {
        path: '/single-player',
        name: '单人游戏',
        component: () => import('@/src/pages/home/single-player/SinglePlayer.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/src/pages/login/Login.vue')
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('@/src/pages/register/Register.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/src/pages/noFound/NoFound.vue')
  }
]

export default routes

