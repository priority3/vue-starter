## template

- [x] ts
- [x] vue3
- [x] vite3
- [x] unocss
- [x] auto-import components & vue & vueuse


 ### TIP 关于补充
 1. 引入其他的ui组件库的自动引入：
请在[vue-auto-import](./config/plugin/vue-auto-com.ts)下，引入 `unplugin-vue-components/resolvers` 所支持的组件库

2. 关于 `unocss` 的配置，全部放在了 `unocss.config.ts` 下 ， 尽量不要在vite当中做嵌套封装，这可能导致`unocss plugin` 的代码高亮不能正常工作。 [issues](https://github.com/unocss/unocss/issues/1474)
