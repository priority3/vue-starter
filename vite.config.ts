import type { UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { configVitePlugin } from './config/plugin'
import { wrapperEnv } from './config/env'
export default ({ mode }): UserConfig => {
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
      ],
    },
  }
}
