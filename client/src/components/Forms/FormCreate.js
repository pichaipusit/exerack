import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./formCreate.css";
import ClearIcon from "@mui/icons-material/Clear";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { createRecord } from "../../actions/records";
import moment from "moment";

function FormCreate({ isModalOpen, setIsModalOpen, activity }) {
  const [recordInput, setRecordInput] = useState({
    imgFile: activity.imgFile,
    activity: activity.title,
    date: new Date(),
    duration: "",
    goal: "",
    note: "",
    cal: activity.cal,
  });
  const [modalCenter, setModalCenter] = useState({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setRecordInput({
      ...recordInput,
      activity: activity.title,
      imgFile: activity.imgFile,
      cal: activity.cal,
    });

    // Smooth form showing
    const timeout = setTimeout(() => {
      setIsFormOpen(true);
    }, 100);
    return () => {
      setIsFormOpen(false);
      clearTimeout(timeout);
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecord(recordInput));
    setRecordInput({
      imgFile: "",
      activity: "",
      date: new Date(),
      duration: "",
      goal: "",
      note: "",
      cal: 0,
    });
  };

  return (
    <>
      <Modal
        sx={modalCenter}
        open={isModalOpen}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form
          className={`form-create form-close ${isFormOpen && "form-open"}`}
          onSubmit={handleSubmit}
        >
          <div className="action-header">
            <h3>Create New Activity</h3>
            <ClearIcon
              onClick={() => setIsModalOpen(false)}
              sx={{
                marginRight: "10px",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            />
          </div>

          <Grid container>
            <Grid item xs={8}>
              <div className="form-group">
                <input
                  className="act_name"
                  type="text"
                  placeholder="Activity Name"
                  value={recordInput.activity}
                  onChange={(e) =>
                    setRecordInput({
                      ...recordInput,
                      activity: e.target.value,
                    })
                  }
                />

                <div>
                  <label htmlFor="duration" className="label-duration">
                    Duration h : m
                  </label>
                  <input
                    className="time"
                    type="time"
                    value={recordInput.duration}
                    onChange={(e) =>
                      setRecordInput({
                        ...recordInput,
                        duration: e.target.value,
                      })
                    }
                  />
                </div>

                <DatePicker
                  selected={recordInput.date}
                  dateFormat="yyyy/MM/dd"
                  onChange={(date) =>
                    setRecordInput({ ...recordInput, date: date })
                  }
                />
              </div>

              {/* <input
                className="date"
                type="date"
                placeholder="Calories goal"
                value={recordInput.date}
                onChange={(e) =>
                  setRecordInput({ ...recordInput, date: e.target.value })
                }
              /> */}

              <div className="form-group">
                <input
                  className="goal"
                  type="number"
                  placeholder="Calories goal"
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
              <img width="100px" src={recordInput.imgFile} alt="" />
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setRecordInput({ ...recordInput, imgFile: base64 })
                }
              />
              ≈ {recordInput.cal} kcal
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
            <button type="submit" className="btn-goon btn">
              Create
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormCreate;
