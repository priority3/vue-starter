import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Layouts from 'vite-plugin-vue-layouts'
// import { configUnocss } from './unocss'
import Unocss from 'unocss/vite'
import { configVuecomponents } from './vue-auto-com'
import { configHtmlPLugin } from './html'
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
  // vue auto components
  vitePlugins.push(configVuecomponents())
  // html
  vitePlugins.push(configHtmlPLugin(viteEnv))
  return vitePlugins
}
