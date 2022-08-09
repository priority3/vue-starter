export {}
// 类型声明只存在于模块中
declare global {
  interface ViteEnv {
    VITE_PORT: number;
    VITE_GLOB_TITLE: string;
  }
}
