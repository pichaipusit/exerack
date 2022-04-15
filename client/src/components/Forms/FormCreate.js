import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./formCreate.css";
import running from "../../images/outdoor/running.jpeg";

function FormCreate() {
  const [recordInput, setRecordInput] = useState({
    imgFile: "",
    activityName: "",
    date: new Date(),
    duration: "",
    note: "",
    goal: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="form-create" onSubmit={handleSubmit}>
        <h3>Create New Activity</h3>
        <Grid container>
          <Grid item xs={6}>
            <div className="form-group">
              <input
                className="act_name"
                type="text"
                placeholder="Activity Name"
                value={recordInput.activityName}
                onChange={(e) =>
                  setRecordInput({
                    ...recordInput,
                    activityName: e.target.value,
                  })
                }
              />

              <input
                className="date"
                type="date"
                placeholder=" Na"
                value={recordInput.date}
                onChange={(e) =>
                  setRecordInput({ ...recordInput, date: e.target.value })
                }
              />

              {/* Duration */}
            </div>
            <div className="form-group">
              <input
                className="goal"
                type="number"
                placeholder="goal"
                value={recordInput.goal}
                onChange={(e) =>
                  setRecordInput({ ...recordInput, goal: e.target.value })
                }
              />

              <input
                className="note"
                type="text"
                placeholder="note"
                value={recordInput.note}
                onChange={(e) =>
                  setRecordInput({ ...recordInput, note: e.target.value })
                }
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <img width="100px" src={running} alt="" />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setRecordInput({ ...recordInput, imgFile: base64 })
              }
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default FormCreate;
