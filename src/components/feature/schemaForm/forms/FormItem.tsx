import { FormSchema, NamePath } from "@/typings/schema";
import { Form } from "antd";
import { getFormComponent } from ".";
export default function FormItem(props: {name:NamePath,schema:FormSchema}) {
  const { name, schema } = props;
  const FormComponent = getFormComponent(schema.type) || schema['x-component'];

  if (!FormComponent) {
    return null
  }
  const noShowLabelKey = ['object','array']
  return (
    <Form.Item label={noShowLabelKey.includes(schema.type)? null : schema.title} name={name} rules={schema['x-rules']}>
      <FormComponent schema={schema} name={name} />
    </Form.Item>
  );
} 