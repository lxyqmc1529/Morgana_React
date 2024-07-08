import {ComponentGroup} from '../../constants';
export default{
  name:'文本输入',
  type:'input',
  group:ComponentGroup.form,
  dataForm:{
    label:{
      type:'string',
      title:'字段名称',
      default:'输入框',
    },
    placeholder:{
      type:'string',
      title:'占位符',
      default:'请输入内容',
    },
  }
}