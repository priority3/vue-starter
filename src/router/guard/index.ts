import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import Nprogress from 'nprogress'
export function setupRouterGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log('router.beforeEach', to, from)
    Nprogress.start()
    next()
  })
  router.afterEach((to: RouteLocationNormalized, _: RouteLocationNormalized) => {
    Nprogress.done()
    document.title = (to.meta.title || 'pity starter') as string
  })
}
