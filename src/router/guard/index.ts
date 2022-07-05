import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
export function setupRouterGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    window.logger('now is ', to.path, from.path)
    next()
  })
  router.afterEach((to: RouteLocationNormalized, _: RouteLocationNormalized) => {
    console.log(to)
    document.title = (to.meta.title || 'pri template vue') as string
  })
}
