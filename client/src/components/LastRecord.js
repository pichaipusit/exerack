import { Box, Grid, Popper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./lastRecord.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, updateRecord } from "../actions/records";
import FormCreate from "./Forms/FormCreate";
import * as actions from "../actions/actionTypes";
import StatusFX from "./Forms/StatusFX";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

function LastRecord({ matches, lasRec }) {
  const isStatusFXShow = useSelector((state) => state.isStatusFXShow);
  const {
    _id,
    imgFile,
    activity: title,
    date,
    duration,
    goal,
    note,
    cal,
  } = lasRec;
  const [isDeleted, setIsDeleted] = useState(false);

  // const percentage = (900 / 1000) * 100;
  const percentage = (cal / (goal === 0 ? cal : goal)) * 100;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    setIsModalOpen(true);
    dispatch({ type: actions.SET_ID, payload: id });
  };
  const handleRemove = (id) => {
    handleClick();
    dispatch(deleteRecord(id));
    setIsDeleted(true);
    window.location.reload();
  };

  // Ask user for sure to delete a record
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={`lasRec-container ${isDeleted && "test"}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <div className={`date-note ${!matches && "date-note-mobile"}`}>
            <p style={{ marginRight: `20px` }}>
              {moment(date).format("DD/MM/YYYY")}
            </p>
            <p>
              Note: <br /> {note}
            </p>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Card */}
          <article
            className="card"
            style={{ backgroundImage: `url(${imgFile})` }}
          >
            <div className="card-info">
              <p>{title} </p>
              <div className="card-footer">
                <p>{duration} </p> <p className="min">min</p>
              </div>
            </div>
          </article>

          <div className="add-more-container">
            <AddCircleIcon />
          </div>
        </Grid>

        {/* Calories circle bar */}
        <Grid item xs={12} sm={2}>
          <div
            className={`goal-cal ${goal == 0 && "darker-goal"}`}
          >{`Goal ${goal} kcal`}</div>
          <div className="circle">
            <CircularProgressbar
              value={percentage}
              text={`${cal} kcal`}
              styles={{
                path: {
                  // Path color
                  stroke: `rgb(252, 127, 38)`,
                  transform: `translate(${
                    matches ? "10px, 10px" : "35px, 5px"
                  }) scale(${matches ? "0.8" : "0.3"})`,
                },
                text: {
                  // Text color
                  fill: "rgb(255, 106, 0)",
                  fontSize: `${matches ? "12px" : "4.2px"}`,
                  transform: `translateY(${matches ? "0" : "-30px"})`,
                },
                trail: {
                  stroke: "transparent",
                  transform: "scale(0.8)",
                  transformOrigin: "center center",
                },
              }}
            />
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className="change-icons">
            <BorderColorIcon
              onClick={() => handleEdit(_id)}
              sx={{ marginRight: "14px", cursor: "pointer" }}
            />

            <DeleteOutlineIcon
              onClick={handleClick}
              sx={{ cursor: "pointer" }}
            />
            {/* Ask user for sure to delete */}
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <button className="sure-btn" onClick={() => handleRemove(_id)}>
                <CheckIcon fontSize="small" />
              </button>
              <button className="no-btn" onClick={() => setAnchorEl(null)}>
                <ClearIcon fontSize="small" />
              </button>
            </Popper>
          </div>
        </Grid>
      </Grid>

      <FormCreate
        activity={lasRec}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        titleStatus="Editing..."
        titleButton="Update"
      />
      <hr />

      {isStatusFXShow && <StatusFX status="Updated" />}
    </div>
  );
}

export default LastRecord;
