import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import cardReducer from "./card-reducer";
import closeCourseReducer from "./close-course-reducer";

let reducers = combineReducers({
    cardReducer: cardReducer,
    closeCourseReducer: closeCourseReducer,
});

let store = createStore(reducers,
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {},
    applyMiddleware(thunkMiddleware),)

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store;