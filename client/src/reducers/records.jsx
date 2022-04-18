import { ActionTypes } from "@mui/base";
import * as actions from "../actions/actionTypes";

export default (records = [], action) => {
  switch (action.type) {
    case actions.GET_ALL:
      return action.payload;
    case actions.CREATE:
      return [...records, action.payload];
    // case actions.GET:
    //   return records.find(rec => rec._id === action.payload);
    // case actions.UPDATE:
    //   return action.payload;
    // case actions.DELETE:
    //   return action.payload;
    default:
      return records;
  }
};
