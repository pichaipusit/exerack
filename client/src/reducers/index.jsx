import { combineReducers } from "redux";
import records from "./records";
import activities, {
  loader,
  currentID,
  isStatusFXShow,
  profileInfo,
} from "./activities";

const reducers = combineReducers({
  records,
  activities,
  loader,
  currentID,
  isStatusFXShow,
  profileInfo,
});

export default reducers;
