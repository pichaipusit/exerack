import { combineReducers } from "redux";
import records from "./records";
import activities, { loader, currentID } from "./activities";

const reducers = combineReducers({
  records,
  activities,
  loader,
  currentID,
});

export default reducers;
