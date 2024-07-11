import { CommonFormProps } from "./types";
import { Select as AntSelect } from "antd";
export default  function Switch(props:CommonFormProps<any>){
  const { value,onChange,schema } = props;
  return <AntSelect value={value} optinons={schema.optinons} placeholder={"请选择"} onChange={onChange}{...schema['x-component-props']}></AntSelect>
}