import { Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./formCreate.css";
import running from "../../images/outdoor/running.jpeg";
import ClearIcon from "@mui/icons-material/Clear";

function FormCreate({ isModalOpen, setIsModalOpen }) {
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
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={isModalOpen}
        // onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form className="form-create" onSubmit={handleSubmit}>
          <div className="action-header">
            <h3>Create New Activity</h3>
            <ClearIcon
              onClick={() => setIsModalOpen(false)}
              sx={{ marginRight: "10px", cursor: "pointer" }}
            />
          </div>

          <Grid container>
            <Grid item xs={8}>
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

            <Grid
              item
              xs={4}
              sx={{
                color: "darkgrey",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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

          <div className="btn-container">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="btn-cancel"
            >
              Cancel
            </button>
            <button type="submit" className="btn-goon">
              Create
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormCreate;
