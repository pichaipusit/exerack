import express from "express";
import { createRecord, getAllRecords } from "../controllers/records.js";

const router = express.Router();

router.route("/").get(getAllRecords).post(createRecord);
// router.route("/:id").get().update().delete();

export default router;
