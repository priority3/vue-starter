import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
// import { configUnocss } from './unocss'
import { configVuecomponents } from './vue-auto-com'
import { configAutoimport } from './auto-imp'
import { configHtmlPLugin } from './html'
import { configVuei18n } from './vuei18n'
import type { ViteEnv } from '#/config'

export function configVitePlugin(viteEnv: ViteEnv) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    Unocss(),
    Layouts(),
  ]
  // unocss
  // vitePlugins.push(configUnocss())
  // auto import components
  vitePlugins.push(configVuecomponents())
  // auto import
  vitePlugins.push(configAutoimport())
  // vue i18n
  vitePlugins.push(configVuei18n())
  // html
  vitePlugins.push(configHtmlPLugin(viteEnv))
  return vitePlugins
}
