
import { arrayMove } from '@dnd-kit/sortable';
import { createSlice,type PayloadAction } from '@reduxjs/toolkit';
import { Immer, produce } from 'immer';

export interface ComponentInfoType {
  id: string,
  name: string,
  type: string,
  props: Record<string, any>,
  isHidden: boolean,
  isLocked: boolean,
  style:Record<string, any>,
  commonStyle:Record<string, any>,
}
export interface ComponentStateType {
  selectedId: string,
  components: ComponentInfoType[]
}
const INIT_STATE: ComponentStateType = {
  selectedId: '',
  components: [],
}
export const componentsSlice = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    resetComponentState(_:ComponentStateType,action:PayloadAction<ComponentStateType>){
      return action.payload;
    },
    addComponent:produce((draft:ComponentStateType, action:PayloadAction<ComponentInfoType>) => {
      draft.components.push(action.payload);
    }),
    selectComponent: produce((draft:ComponentStateType, action:PayloadAction<string>) => {
      draft.selectedId = action.payload;
    }),
    moveComoment:produce((draft:ComponentStateType, action:PayloadAction<{fromIndex:number,toIndex:number}>)=>{
      const {oldIndex,newIndex} = action.payload;
      const components = draft.components;
      draft.components = arrayMove(components,oldIndex,newIndex)
    }),
    changeProps:produce((draft:ComponentStateType, action:PayloadAction<{id:string,props:Record<string,any>}>) => {
      const { id,props} = action.payload;
      const components = draft.components.find(c => c.id === id);
      if(components){
        components.props = {
          ...components.props,
         ...props
        }
      }
    })
      
}});

export const { resetComponentState,addComponent,selectComponent,moveComoment,changeProps } = componentsSlice.actions;
export default componentsSlice.reducer;