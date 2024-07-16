import { Collapse } from 'antd';
import { CommonFormProps } from './types';
import { concatNamePath, namePathToString } from '../utils';
import SchemaFormItem from './FormItem';
export default function ObjectForm(props: CommonFormProps){
  const {schema,name} = props;
  return <Collapse items={[{
    key: namePathToString(name),
    label:schema.title,
    children: (<>{
      Object.entries(schema.properties).map(([key,child]) => {
        const currentNamePath = concatNamePath(name,key);
        return <SchemaFormItem key={namePathToString(currentNamePath)} name={currentNamePath} schema={child} />
      })
    }</>)
  }]}></Collapse>
}