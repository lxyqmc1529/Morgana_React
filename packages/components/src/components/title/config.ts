import { ComponentGroup } from "../../constants";
export default{
    name: "标题文本",
    type: "title",
    group: ComponentGroup.basic,
    dataForm:{
      text:{
        type:'textarea',
        title:'Title',
        default:'This is a title'
      },
      level:{
        type:'select',
        title:'Level',
        options:[
          {label:'H1',value:'h1'},
          {label:'H2',value:'h2'},
          {label:'H3',value:'h3'},
          {label:'H4',value:'h4'},
          {label:'H5',value:'h5'},
        ],
        default:'h1'
      },
      mark:{
        type:'boolean',
        title:'Mark',
        default:false
      }
    }
    
}