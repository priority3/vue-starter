import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export function configVuecomponents() {
  return Components({
    resolvers: [
      // AntDesignVueResolver(),
    ],
    // allow auto load markdown components under `./src/components/`
    extensions: ['vue', 'md'],
    // allow auto import and register components used in markdown
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'types/components.d.ts',
  })
}
