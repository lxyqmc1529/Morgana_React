
import { createSlice,type PayloadAction } from '@reduxjs/toolkit';
import { Immer, produce } from 'immer';

interface ComponentInfoType {
  id: string,
  name: string,
  type: string,
  props: Record<string, any>,
  isHidden: boolean,
  isLocked: boolean,
  style:Record<string, any>,
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
    })
  }
});

export const { resetComponentState,addComponent} = componentsSlice.actions;
export default componentsSlice.reducer;