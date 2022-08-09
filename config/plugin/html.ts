import { createHtmlPlugin } from 'vite-plugin-html'

export function configHtmlPLugin(viteEnv: ViteEnv) {
  const { VITE_GLOB_TITLE } = viteEnv
  return createHtmlPlugin({
    template: '/index.html',
    inject: {
      data: {
        title: VITE_GLOB_TITLE,
      },
    },
  })
}
