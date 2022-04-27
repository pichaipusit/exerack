import { Box, Grid, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import "./formCreate.css";
import ClearIcon from "@mui/icons-material/Clear";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createRecord, updateRecord } from "../../actions/records";
import moment from "moment";

function FormProfile({
  isModalOpen,
  setIsModalOpen,
  activity,
  titleStatus,
  titleButton,
}) {
  const [recordInput, setRecordInput] = useState({
    imgFile: "",
    activity: "",

    goal: 0,
    note: "",
    cal: "",
  });

  // Styling form
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
      activity: activity.activity,
      imgFile: activity.imgFile,
      cal: activity.cal,

      goal: activity.goal ? activity.goal : 0,
      note: activity.note || "",
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

  // Switch between Create & Update for the form button
  const currentID = useSelector((state) => state.currentID);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentID === 0) {
      dispatch(createRecord(recordInput));
    } else {
      dispatch(updateRecord(currentID, recordInput));
    }
    setIsModalOpen(false);
    setRecordInput({
      imgFile: "",
      activity: "",
      date: "",
      duration: "",
      goal: 0,
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
            <h3>{titleStatus} </h3>
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
              </div>

              <div className="form-group">
                <label htmlFor="goal" className="label-margin">
                  Calories Goal
                </label>
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
              {titleButton}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormProfile;
