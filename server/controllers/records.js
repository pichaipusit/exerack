import RecordInfo from "../models/record.model.js";

export const getAllRecords = async (req, res) => {
  try {
    const allActivities = await RecordInfo.find();

    res.status(200).json(allActivities);
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
  const { imgFile, activity, date, duration, goal, note } = req.body;
  const newRecord = new RecordInfo({
    activity,
    date,
    duration,
    goal,
    note,
  });

  try {
    await newRecord.save();

    res.status(201).json(newRecord);
  } catch (error) {
    res.status(409).json(error);
  }
};
