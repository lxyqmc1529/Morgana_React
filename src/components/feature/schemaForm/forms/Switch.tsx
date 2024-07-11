import { CommonFormProps } from "./types";
import { Switch as AntSwitch } from "antd";
export default  function Switch(props:CommonFormProps<string>){
  const { value,onChange,schema } = props;
  return <AntSwitch value={value}  onChange={onChange}{...schema['x-component-props']}></AntSwitch>
}