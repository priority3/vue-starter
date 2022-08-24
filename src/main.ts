import type { App } from 'vue'
import { createApp } from 'vue'
import appView from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import { setupRouter } from './router'

async function bootstrap(app: App): Promise<App> {
  setupRouter(app)
  return app
}

const app = createApp(appView)

bootstrap(app).then(res => res.mount('#app'))
