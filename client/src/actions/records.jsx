import * as api from "../api/index";
import * as actions from "../actions/actionTypes";

export const getAllRecords = () => async (dispatch) => {
  dispatch({ type: actions.LOAD, payload: true });

  try {
    const { data } = await api.getAllRecords();
    dispatch({ type: actions.GET_ALL_RECS, payload: data });

    dispatch({ type: actions.LOAD, payload: false });
  } catch (error) {
    console.log(error);
  }
};

export const createRecord = (newRec) => async (dispatch) => {
  try {
    const { data } = await api.createRecord(newRec);
    dispatch({ type: actions.CREATE_REC, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
