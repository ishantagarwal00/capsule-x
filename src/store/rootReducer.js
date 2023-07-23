import { combineReducers } from "redux";
import capsulesReducer from "./capsules/capsulesSlice";

const rootReducer = combineReducers({
  capsules: capsulesReducer,
});

export default rootReducer;
