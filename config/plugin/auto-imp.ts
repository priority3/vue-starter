import Autoimport from 'unplugin-auto-import/vite'

export function configAutoimport() {
  return Autoimport({
    imports: [
      'vue',
      'vue-i18n',
      'vue-router',
      'vue/macros',
      '@vueuse/core',
    ],
    dts: 'types/auto-imports.d.ts',
    // dirs: [],
    // 直接在template当中使用变量
    vueTemplate: true,
  })
}
