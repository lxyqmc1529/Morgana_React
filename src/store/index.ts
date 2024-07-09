import {configureStore} from '@reduxjs/toolkit';
import combineReducers from './componentReducer';

export default configureStore({
  reducer: {
    component:combineReducers
  },
});