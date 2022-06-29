import type { Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { configUnocss } from './unocss'
import { configAutoimport } from './auto-imp'
import { configVuecomponents } from './vue-auto-com'
import { configMockplugin } from './mock'
export function configVitePlugin(isBuild: Boolean): Plugin[] {
  const vitePlugins: (Plugin | Plugin[]) [] = [
    // unocss
    configUnocss(),
    // 自动引入
    configAutoimport(),
    // vue 相关组件 自动导入
    configVuecomponents(),
    // vue
    Vue({
      // $语法糖
      reactivityTransform: true,
    }),
  ]
  vitePlugins.push(configMockplugin(isBuild))
  return vitePlugins
}

export default configVitePlugin
