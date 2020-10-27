import {combineReducers} from 'redux';
import NewListReducer from './newListReducer'
import NewTaskReducer from './newTaskReducer'


export default combineReducers({
    NewListReducer,
    NewTaskReducer
})