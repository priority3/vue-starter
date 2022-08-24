import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { configVitePlugin } from './config/plugin'
import { wrapperEnv } from './config/env'
export default ({ mode }: ConfigEnv): UserConfig => {
  // console.log(command, mode)
  // const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  return {
    plugins: configVitePlugin(viteEnv),
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: '/src/',
        },
        {
          find: '#/',
          replacement: '/types/',
        },
      ],
    },
  }
}
