import { CommonFormProps } from "./types";
import { Input as AntInput } from "antd";
export default function TextArea(props:CommonFormProps<string>){
  const { value,onChange,schema } = props;
  const changeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  }
  return <AntInput.TextArea value={value} placeholder="请输入" onChange={changeHandler}{...schema['x-component-props']} />
}