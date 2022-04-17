import { ActionTypes } from "@mui/base";
import * as actions from "../actions/actionTypes";

export default (records = ["sd"], action) => {
  switch (action.type) {
    case actions.LOAD:
      return { ...records, loading: true };
    default:
      return records;
  }
};
