import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
  imgFile: String,
  activity: { type: String, required: [true, `Activity name's required`] },
  date: { type: Date, default: new Date() },
  duration: { type: String, required: [true, "Please set the duration"] },
  goal: Number,
  note: String,
  cal: Number,
});

const RecordInfo = mongoose.model("RecordInfo", recordSchema);

export default RecordInfo;
