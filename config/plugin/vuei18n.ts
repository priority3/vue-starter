import path from 'path'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

export function configVuei18n() {
  return VueI18n({
    runtimeOnly: true,
    compositionOnly: true,
    include: [path.resolve(process.cwd(), 'src/locales/lang/**')],
  })
}
