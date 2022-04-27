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

// Small component that want to store value for others to use
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

export const isStatusFXShow = (fxShow = false, action) => {
  switch (action.type) {
    case actions.SHOW_FX:
      return action.payload;
    default:
      return fxShow;
  }
};
export const profileInfo = (
  info = {
    name: "Saladpak",
    weight: 60,
    height: 175,
    age: 20,
    email: "saladpak88@gmail.com",
  },
  action
) => {
  switch (action.type) {
    case actions.UPDATE_PROFILE:
      return action.payload;
    default:
      return info;
  }
};
