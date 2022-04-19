import * as api from "../api/index";
import * as actions from "../actions/actionTypes";

export const getAllRecords = (fetchRecords) => async (dispatch) => {
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

    // Show status FX
    dispatch({ type: actions.SHOW_FX, payload: true });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecord = (id, updatedRec) => async (dispatch) => {
  try {
    const { data } = await api.updateRecord(id, updatedRec);

    dispatch({ type: actions.UPDATE_REC, payload: data });
    dispatch({ type: actions.SET_ID, payload: 0 });
    // Show status FX
    dispatch({ type: actions.SHOW_FX, payload: true });
  } catch (error) {
    console.log(error);
  }
};
export const deleteRecord = (id) => async (dispatch) => {
  try {
    await api.deleteRecord(id);

    dispatch({ type: actions.DELETE_REC, payload: id });
  } catch (error) {
    console.log(error);
  }
};
