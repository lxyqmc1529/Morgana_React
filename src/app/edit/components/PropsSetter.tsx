import useGetComponentsInfo from "@/hooks/useGetComponentsInfo";
import SchemaForm  from "@/components/feature/schemaForm";
import { getComponentInfoByType } from "@morgana/components";
import { useDispatch } from "react-redux";
import { Empty } from "antd";
import { changeProps } from "@/store/componentReducer";
//一个面向props的表单生成器
export default function PropsSetter(props: any) {
  const { selectedComponent,selectedId } = useGetComponentsInfo();
  const disatch = useDispatch();
  if (!selectedComponent) {
    return <Empty description="请先选择一个组件" />;
  }
  const componentInfo = getComponentInfoByType(selectedComponent.type);
  const formSchema = componentInfo?.meta.dataForm;
  if (!formSchema) {
    return <Empty description="该组件没有可配置的属性" />;
  }
  const propsValuesChange = (values:Record<string, any>) => {
    disatch(changeProps({id:selectedId,props:values}))
  }
  return (
    <div>
     <SchemaForm schema={formSchema} value={selectedComponent.props} onChange={propsValuesChange} />
      </div>
  );
}