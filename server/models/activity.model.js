import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  imgFile: String,
  category: String,
  name: String,
  calories: Number,
});

const ActivityInfo = mongoose.model("ActivityInfo", activitySchema);

export default ActivityInfo;
