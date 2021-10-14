import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
})
//!--- store

export const store = createStore(rootReducer, composeWithDevTools())
