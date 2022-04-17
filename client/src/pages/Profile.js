import { Grid } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createActivity } from "../actions/activities";

function Profile() {
  const dispatch = useDispatch();
  const [availableActs, setAvailableActs] = useState({
    category: "",
    imgFile: "",
    title: "",
    cal: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(availableActs));
    setAvailableActs({ category: "", imgFile: "", title: "", cal: 0 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="category"
          value={availableActs.category}
          onChange={(e) =>
            setAvailableActs({
              ...availableActs,
              category: e.target.value,
            })
          }
        />
        <img width="100px" src={availableActs.imgFile} alt="" />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setAvailableActs({ ...availableActs, imgFile: base64 })
          }
        />
        <input
          type="text"
          placeholder="title"
          value={availableActs.title}
          onChange={(e) =>
            setAvailableActs({
              ...availableActs,
              title: e.target.value,
            })
          }
        />
        <input
          type="number"
          name="cal"
          value={availableActs.cal}
          onChange={(e) =>
            setAvailableActs({
              ...availableActs,
              cal: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
