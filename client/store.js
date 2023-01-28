import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './src/reducers/productReducer'

const reducer = combineReducers({
  productList: productListReducer,
})
const initialstate = {}
const middleware = [thunk]
const store = configureStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
