import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { getLangName } from './helper'
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('./lang/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      return [getLangName(key), value.default]
    }),
)
const createI18nOptions = () => {
  return {
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'en',
    messages,
  }
}

export function setupI18n(app: App) {
  const i18n = createI18n(createI18nOptions())
  app.use(i18n)
}
