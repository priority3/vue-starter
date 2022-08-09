import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import Nprogress from 'nprogress'
export function setupRouterGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // console.log('router.beforeEach', to, from)
    Nprogress.start()
    next()
  })
  router.afterEach((to: RouteLocationNormalized, _: RouteLocationNormalized) => {
    Nprogress.done()
    const { VITE_GLOBAL_TITLE } = import.meta.env
    document.title = (to.meta.title || VITE_GLOBAL_TITLE) as string
  })
}
