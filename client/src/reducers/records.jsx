import * as actions from "../actions/actionTypes";

export default (records = [], action) => {
  switch (action.type) {
    case actions.GET_ALL_RECS:
      return action.payload;
      break;
    case actions.CREATE_REC:
      return [...records, action.payload];
      break;

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
