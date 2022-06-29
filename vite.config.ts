import type { ConfigEnv, UserConfig } from 'vite'
import configVitePlugin from './config/plugin'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: configVitePlugin(),
//   resolve: {
//     alias: {
//       '@/': '/src/',
//     },
//   },
// })
export default ({ command }: ConfigEnv): UserConfig => {
  // console.log(command, mode)
  const isBuild = command === 'build'
  return {
    plugins: configVitePlugin(isBuild),
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: '/src/',
        },
      ],
    },
  }
}
