import { viteMockServe } from 'vite-plugin-mock'
export function configMockplugin(isBuild) {
  return viteMockServe({
    mockPath: '../../mock',
    localEnabled: !isBuild,
  })
}
