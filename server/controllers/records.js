import mongoose from "mongoose";
import RecordInfo from "../models/record.model.js";

export const getAllRecords = async (req, res) => {
  try {
    const allRecords = await RecordInfo.find();

    res.status(200).json(allRecords);
  } catch (error) {
    res.status(404).json(error);
  }
};

// export const getRecord = async (req, res) => {
//   try {
//     const allActivities = await RecordInfo.find();

//     res.status(200).json(allActivities);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// };

export const createRecord = async (req, res) => {
  const { imgFile, activity, date, duration, goal, note, cal } = req.body;
  const newRecord = new RecordInfo({
    imgFile,
    activity,
    date,
    duration,
    goal,
    note,
    cal,
  });

  try {
    await newRecord.save();

    res.status(201).json(newRecord);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { imgFile, activity, date, duration, goal, note, cal } = req.body;
  // const record = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No record with id: ${id}`);
  }
  const updatedRecord = {
    _id: id,
    imgFile,
    activity,
    date,
    duration,
    goal,
    note,
    cal,
  };
  await RecordInfo.findByIdAndUpdate(id, updatedRecord, { new: true });
  res.json(updatedRecord);
};

export const deleteRecord = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No record with id: ${id}`);
  }

  await RecordInfo.findByIdAndDelete(id);
  res.json({ message: "Delete successfully." });
};
