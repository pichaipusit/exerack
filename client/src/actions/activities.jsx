import * as api from "../api/index";
import * as actions from "../actions/actionTypes";
import { useSelector } from "react-redux";

export const getAllActs = () => async (dispatch) => {
  dispatch({ type: actions.LOAD, payload: true });

  try {
    const { data } = await api.getAllActivities();
    dispatch({ type: actions.GET_ALL, payload: data });

    dispatch({ type: actions.LOAD, payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const createActivity = (newAct) => async (dispatch) => {
  try {
    const { data } = await api.createActivity(newAct);

    dispatch({ type: actions.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
