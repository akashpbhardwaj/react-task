import { combineReducers } from "redux";
import { categories, cats } from './Reducers';

const allReducer = combineReducers({ categories, cats })

export default allReducer;