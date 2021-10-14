import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})
//!--- store

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
