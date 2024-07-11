import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import Switch from './Switch';
import { CommonFormProps } from './types';

const formsMap:Record<string,(props:CommonFormProps )=> JSX.Element> ={
  string: Input,
  boolean: Switch,
  textarea: TextArea,
  select: Select,
}

export function getFormComponent(type:string){
  return formsMap[type];
}