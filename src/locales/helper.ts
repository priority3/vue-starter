export function getLangName(path: string): string {
  const pathname = path.slice(7)
  const res = /^([\w|-]+)\./.exec(pathname)
  return res ? res[1] : ''
}
