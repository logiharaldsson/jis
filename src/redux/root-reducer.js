import { combineReducers } from "redux";

import boxesReducer from "./box/box.reducer";
import userReducer from "./user/user.reducer";
import timeReducer from "./time/time.reducer";

export default combineReducers({
    box: boxesReducer,
    user: userReducer,
    time: timeReducer
});