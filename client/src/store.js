import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { allcarts, allnews, alltasks, cart, taskdetail, taskReducer } from '../src/redux/taskReducer';

const reducer = combineReducers({
    task:taskReducer ,
    tasks: alltasks,
    taskdetail:taskdetail,
    allcarts:allcarts,
    allnews:allnews,
    cart:cart

})
const middleware = [thunk];

const initialState = {}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;