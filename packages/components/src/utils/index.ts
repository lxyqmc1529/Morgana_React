import { ComponentGroups } from "../constants";
import { ComponentInfo } from "../typings";
export function ComponentGroupBy(components:Record<string, ComponentInfo>){
  for(const component of Object.values(components)){
    const group = component.meta.group;
    const groupInfo = ComponentGroups[group];
    if(groupInfo){
      groupInfo.children.push(component);
    }
  }
  return Object.values(ComponentGroups);
}