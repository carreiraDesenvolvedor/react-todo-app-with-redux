import {combineReducers} from 'redux'

import TodoReducer from './todo'

const rootReducer = combineReducers({

    todo: TodoReducer

})

export default rootReducer