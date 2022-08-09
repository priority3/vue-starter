import type { InjectionKey } from 'vue'
import { readonly as defineReadonly, inject, provide, reactive } from 'vue'

export interface CreateContextOptions {
  readonly?: boolean
  createProvider?: boolean
  native?: boolean
}

export function createContext<T>(
  context: any,
  key: InjectionKey<T> = Symbol('uni-key'),
  options: CreateContextOptions,
) {
  const { readonly = true, createProvider = true, native = false } = options
  const state = reactive(context)
  const providerData = readonly && defineReadonly(state)
  createProvider && provide(key, native ? state : providerData)
  return {
    state,
  }
}

export function useContext<T>(
  key: InjectionKey<T> = Symbol('uni-key'),
  defaultValue: any = {},
) {
  return inject(key, defaultValue)
}
