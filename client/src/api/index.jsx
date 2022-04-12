import axios from "axios";

const url = "http://localhost:4000/records";

export const getAllRecords = () => axios.get(url);
export const createRecord = (newRecod) => axios.post(url, newRecod);
export const getRecord = (id) => axios.get(`${url}/${id}`);
export const updateRecord = (id) => axios.put(`${url}/${id}`);
export const deleteRecord = (id) => axios.delete(`${url}/${id}`);
