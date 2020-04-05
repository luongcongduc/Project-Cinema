import {combineReducers} from "redux";
import fimlsReducer from "./fimlsReduce";
import cinemaReducer from './cinemaReducer';
import userReducer from "./userReducer"
const rootReducer = combineReducers({
    fimlsReducer,
    cinemaReducer,
    userReducer,
})
export default rootReducer;