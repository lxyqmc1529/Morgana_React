import { componentGroups } from "@morgana/components";
import { ComponentInfo } from "@morgana/components";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";
import { addComponent } from "@/store/componentReducer";
import { nanoid } from "nanoid";
import ShemaParser from '@/lib/shemaParser'
function ComponentList({components}:{components:ComponentInfo[]}){
  const dispatch = useDispatch()
  const dispatchAddComponent = (component:ComponentInfo) => {
    const { type ,name, dataForm } = component.meta
    dispatch(addComponent({
      id:nanoid(),
      type,
      name,
      props:dataForm ? ShemaParser.parse(dataForm) : {},
    }))
  };
  return <div>{
    components.map(component => <div key={component.meta.type} 
      onClick={() => dispatchAddComponent(component)}
      className="w-1/2 leading-10 bg-slate-100 rounded-md text-center text-slate-600 font-medium cursor-pointer select-none font-sans">{component.meta.name}</div>)}</div>
}
export default function ComponentTree() {
  return (<Tabs items={componentGroups.map(group => {
    return {
      key:group.key,
      label:group.name,
      children:<ComponentList components={group.children} />
    }
  })}
  ></Tabs>)
}