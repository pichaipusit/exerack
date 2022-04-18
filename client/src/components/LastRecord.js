import { Grid } from "@mui/material";
import React from "react";
import running from "../images/outdoor/running.jpeg";
import "./lastRecord.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import moment from "moment";

function LastRecord({ matches, lasRec }) {
  const { imgFile, activity, date, duration, goal, note, cal } = lasRec;

  // const percentage = (900 / 1000) * 100;
  const percentage = (cal / goal) * 100;

  return (
    <div style={{ margin: "30px 0" }}>
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
              <p>{activity} </p>
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
          <div className="goal">{goal && `Goal ${goal} kcal`}</div>
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
                  fontSize: `${matches ? "16px" : "6px"}`,
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
            <BorderColorIcon sx={{ marginRight: "14px", cursor: "pointer" }} />
            <DeleteOutlineIcon sx={{ cursor: "pointer" }} />
          </div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
}

export default LastRecord;
