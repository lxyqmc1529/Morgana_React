import {configureStore} from '@reduxjs/toolkit';
import combineReducers, {ComponentStateType} from './componentReducer';


export interface StateType {
  component: ComponentStateType;
}
export default configureStore({
  reducer: {
    component:combineReducers
  },
});
