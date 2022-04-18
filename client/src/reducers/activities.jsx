import * as actions from "../actions/actionTypes";

export default (activities = [], action) => {
  switch (action.type) {
    case actions.GET_ALL:
      return action.payload;
    case actions.CREATE:
      return [...activities, action.payload];
    default:
      return activities;
  }
};

export const loader = (loading = false, action) => {
  switch (action.type) {
    case actions.LOAD:
      return action.payload;
    default:
      return loading;
  }
};

export const currentID = (id = 0, action) => {
  switch (action.type) {
    case actions.SET_ID:
      return action.payload;
    default:
      return id;
  }
};
