import { FormSchema } from "@/typings/schema";

export const textStyleSchema: FormSchema = {
  type:'object',
  title: '字体样式',
  properties:{
    color:{
      type:'color',
      title:'字体颜色',
      default:'#000000'
    },
    size:{
      type:'number',
      title:'字体大小',
      default:14,
    },
    align:{
      type:'radio',
      title:'对齐方式',
      options:[
        {label:'左对齐',value:'left'},
        {label:'居中',value:'center'},
        {label:'右对齐',value:'right'}
      ],
      default:'left',
      'x-component-props':{
        optionType:'button',
        buttonStyle:'solid'
      }
    },
    weight:{
      type:'select',
      title:'字体粗细',
      default:'normal',
      options:[
        {label:'正常',value:'normal'},
        {label:'粗体',value:'bold'},
        {label:'加粗',value:'bolder'},
        {label:'细体',value:'lighter'},
        {label:'medium',value:500},
        {label:'semibold',value:600},
        {label:'bold',value:700}

      ]
    },
    style:{
      type:'radio',
      title:'字体样式',
      options:[
        {label:'正常',value:'normal'},
        {label:'斜体',value:'italic'},
        {label:'倾斜体',value:'oblique'},
      ],
      'x-component-props':{
        optionType:'button',
        buttonStyle:'solid'
      },
      decoration:{
        type:'select',
        title:'文本装饰',
        default:'none',
        options:[
          {label:'无',value:'none'},
          {label:'下划线',value:'underline'},
          {label:'删除线',value:'line-through'},
          {label:'上划线',value:'overline'},
        ]
      }
    }
  }
}

export const CommonStyleMap:Record<string,FormSchema> = {
  text:textStyleSchema
}