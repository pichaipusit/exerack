import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import activityRoutes from "./routes/activities.js";
import recordRoutes from "./routes/records.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const port = process.env.PORT || 4000;
const mongoDBUrl = process.env.MONGODB_URL;

// Route end point
app.use("/activities", activityRoutes);
app.use("/records", recordRoutes);

// Start the server
const connectDB = async () => {
  await mongoose.connect(mongoDBUrl);

  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

connectDB();
