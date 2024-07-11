import { CommonFormProps } from "./types";
import { Input as AntInput } from "antd";
export default  function Input(props:CommonFormProps<string>){
  const { value,onChange,schema } = props;
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }
  return <AntInput value={value} placeholder="请输入" onChange={changeHandler}{...schema['x-component-props']}></AntInput>
}