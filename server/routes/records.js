import express from "express";
import {
  createRecord,
  deleteRecord,
  getAllRecords,
  updateRecord,
} from "../controllers/records.js";

const router = express.Router();

router.route("/").get(getAllRecords).post(createRecord);
router.route("/:id").patch(updateRecord).delete(deleteRecord);

export default router;
