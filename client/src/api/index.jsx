import axios from "axios";

const urlRec = "http://localhost:4000/records";

export const getAllRecords = () => axios.get(urlRec);
export const createRecord = (newRecord) => axios.post(urlRec, newRecord);
export const getRecord = (id) => axios.get(`${urlRec}/${id}`);
export const updateRecord = (id) => axios.put(`${urlRec}/${id}`);
export const deleteRecord = (id) => axios.delete(`${urlRec}/${id}`);

const urlAct = "http://localhost:4000/activities";

export const getAllActivities = () => axios.get(urlAct);
export const createActivity = (newAct) => axios.post(urlAct, newAct);
