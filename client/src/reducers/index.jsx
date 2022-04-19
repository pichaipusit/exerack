import { combineReducers } from "redux";
import records from "./records";
import activities, { loader, currentID, isStatusFXShow } from "./activities";

const reducers = combineReducers({
  records,
  activities,
  loader,
  currentID,
  isStatusFXShow,
});

export default reducers;
