import { ActionTypes } from "@mui/base";
import * as actions from "../actions/actionTypes";

export default (state = { records: [], loading: false }, action) => {
  switch (action.type) {
    case actions.LOAD:
      return { ...state, loading: true };
    default:
      return state;
  }
};
