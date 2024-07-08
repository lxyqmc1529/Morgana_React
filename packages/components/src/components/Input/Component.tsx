import { Form,Input as AntInput } from 'antd';
import type { InputProps } from './interface';
export default function Input(props:InputProps){
  return <Form.Item label={props.label} name={props.id} >
    <AntInput {...props} placeholder={props.placeholder} />
  </Form.Item>
}