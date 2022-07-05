import type { RouteRecordRaw, Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { setupRouterGuard } from './guard'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}
