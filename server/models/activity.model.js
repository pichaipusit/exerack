import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  category: String,
  imgFile: String,
  title: String,
  cal: Number,
});

const ActivityInfo = mongoose.model("ActivityInfo", activitySchema);

export default ActivityInfo;
