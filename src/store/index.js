import {combineReducers, createStore} from "redux";
import accountReducer from "./accountReducer";
import testReducer from "./testReducer";

const rootReducer = combineReducers(
{
  account: accountReducer,
  test: testReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store