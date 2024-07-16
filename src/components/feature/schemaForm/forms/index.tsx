import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import Switch from './Switch';
import ObjectForm from './Object'
import ArrayForm from './Array'
import { CommonFormProps } from './types';

const formsMap:Record<string,(props:CommonFormProps )=> JSX.Element> ={
  string: Input,
  boolean: Switch,
  textarea: TextArea,
  select: Select,
  object:ObjectForm,
  array:ArrayForm
}

export function getFormComponent(type:string){
  return formsMap[type];
}