import { combineReducers } from "redux";
import eventReducer from "../../Components/features/event/eventReducer";
import testReducer from "../../Components/testarea/testReducer";

const rootReducer = combineReducers({
    test : testReducer,
    events: eventReducer
})



export default rootReducer