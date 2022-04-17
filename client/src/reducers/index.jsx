import { combineReducers } from "redux";
import records from "./records";
import activities, { loader } from "./activities";

const reducers = combineReducers({
  records,
  activities,
  loader,
});

export default reducers;
