import Autoimport from 'unplugin-auto-import/vite'

export function configAutoimport() {
  return Autoimport({
    imports: [
      'vue',
      'vue/macros',
      '@vueuse/core',
    ],
    dirs: [],
    // 直接在template当中使用变量
    vueTemplate: true,
  })
}
