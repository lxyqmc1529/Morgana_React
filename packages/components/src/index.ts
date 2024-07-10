
import { ComponentGroupBy } from './utils'
export * from './typings'
const components = require.context('./components', true, /index\.ts$/)
export const componentMap = (components.keys() as string[]).reduce((acc:Record<string, any>, key) => {
  const component = components(key).default
  const componentType = component.meta.type;
  acc[componentType] = component;
  return acc
}, {})

export const componentGroups = ComponentGroupBy(componentMap)
export function getComponentByType(type:string){
  const componentInfo = componentMap[type];
  if(!componentInfo) return null;
  return componentInfo.component;
}