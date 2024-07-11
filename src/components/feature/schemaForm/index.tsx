//这写配置表单组件
import { FormSchema } from '@/typings/schema';
import SchemaFormItem from './forms/FormItem';
import React, { useEffect } from'react';
import {Form} from 'antd';
interface SchemaFormProps {
  value:Record<string,any>;
  schema:Record<string,FormSchema>;
  onChange:(value:Record<string,any>)=>void;
}
export default function SchemaForm(props:SchemaFormProps) {
  const {value,schema,onChange} = props;
  const [form] = Form.useForm();
  useEffect(() =>{
    form.setFieldsValue(value);
  },[value])
  const formChange = (changedValue:Record<string,any>,values:Record<string,any>) => {
    onChange(values);
  }
  return <Form initialValues={value}
  onValuesChange={formChange}
  form={form}
  variant='filled'
  labelAlign='left'
  labelCol={{span:8}}
  size="small"
  onValuesChange={formChange}
  >
    {
      Object.entries(schema).map(([key,item]) =><SchemaFormItem key={key} name={key} schema={value} /> )}
  </Form>
}