import { ComponentInfo } from '../typings';
export const enum ComponentGroup{
  basic = 'basic',
  form = 'form'
}
export const ComponentGroups:Record<ComponentGroup, {
  name: string;
  key: ComponentGroup;
  children: ComponentInfo[];
}> = {
  [ComponentGroup.basic]:{
    name: '基础组件',
    key: ComponentGroup.basic,
    children: []
  },[ComponentGroup.form]:{
    name: '表单组件',
    key: ComponentGroup.form,
    children: []}
}