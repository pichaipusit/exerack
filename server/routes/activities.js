import express from "express";
import { createActivity, getAllActivities } from "../controllers/activities.js";

const router = express.Router();

router.route("/").get(getAllActivities).post(createActivity);

export default router;
