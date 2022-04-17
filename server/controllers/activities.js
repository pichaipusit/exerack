import ActivityInfo from "../models/activity.model.js";

export const getAllActivities = async (req, res) => {
  try {
    const allActivities = await ActivityInfo.find();

    res.status(200).json(allActivities);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createActivity = async (req, res) => {
  const { category, imgFile, title, cal } = req.body;
  const newActivity = new ActivityInfo({
    category,
    imgFile,
    title,
    cal,
  });

  try {
    await newActivity.save();

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(409).json(error);
  }
};
