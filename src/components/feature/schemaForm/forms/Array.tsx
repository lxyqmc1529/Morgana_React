import { Collapse,Card,Button,Space,Form} from 'antd';
import { CommonFormProps } from './types';
import { Plus, Trash2,ArrowUp,ArrowDown } from 'lucide-react';
import shemaParser from '@/lib/shemaParser';
import { concatNamePath, isFormSchema, namePathToString } from '../utils';
import SchemaFromItem from './FormItem';
import SortableContainer from '../../DragSortable/SortableContainer';
import SortableItem from '../../DragSortable/SortableItem';
import {arrayMove} from '@dnd-kit/sortable'
export default function ArrayForm(props:CommonFormProps<any[]>){
  const {value,schema,name,onChange} = props;
  const createNewItme = () => {
    return isFormSchema(schema.items) ?
    shemaParser.parse({result:schema.items}).result :  shemaParser.parse(schema.items!);
  }
  const sortbaleArray = (oldIndex:number,newIndex:number) => {
    value && onChange?.(arrayMove(value,oldIndex,newIndex))
  }
  const valueWithId = (value || []).map((item,index) => ({...item,id:`${index}`}))
  return <Collapse items={[{
    key: namePathToString(name),
    label:schema.title,
    children:<SortableContainer items={valueWithId} onDragEnd={sortbaleArray}>
      <Form.List name={name}>{
        (fields, { add, remove,move }) => {
         return <Space direction='vertical'>
      { fields?.map(({key,name:curName},index)=>{
       
        return <SortableItem key={key} id={`${index}`}>
          <Card size='small' title={`数据项${index+1}`} key={index}
        extra={<div className='flex items-center gap-2'>
          <Button shape='circle' icon={<Trash2 size={12} />} danger size='small' onClick={() => remove(index)}></Button>
          <Button shape='circle' icon={<ArrowUp size={12} />} disabled={index===0} size='small' onClick={() => move(index,index-1)}></Button>
          <Button shape='circle' icon={<ArrowDown size={12} />} disabled={index===fields.length-1} size='small' onClick={() => move(index,index+1)}></Button>

        </div>}
        >{
          isFormSchema(schema.items) ? <SchemaFromItem key={key} name={curName} schema={schema.items}></SchemaFromItem> :
          Object.entries(schema.items || {}).map(([key,subSchema]) => {
            const subNamePath = concatNamePath(curName,key);
            return <SchemaFromItem key={namePathToString(subNamePath)} name={subNamePath} schema={subSchema}></SchemaFromItem>
          })
         }</Card>
        </SortableItem>
      })}
      <Button type='dashed' block onClick={() => add(createNewItme())}>
        <Plus />新增数据
      </Button>
      </Space>
        }
      }</Form.List>
      
      
    </SortableContainer>
  }]}></Collapse>
}