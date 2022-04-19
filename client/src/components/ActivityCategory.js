import { Grid } from "@mui/material";
import React, { useState } from "react";
import "../pages/Activities.css";
import { useDispatch, useSelector } from "react-redux";
import FormCreate from "./Forms/FormCreate";
import StatusFX from "./Forms/StatusFX";

function ActivityCategory({ cateTitle, cateList, titleColor = "normal" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activity, setActivity] = useState({
    activity: "",
    imgFile: "",
    cal: "",
  });

  const handleClick = (title, imgFile, cal) => {
    setIsModalOpen(true);
    setActivity({ activity: title, imgFile: imgFile, cal: cal });
  };

  const isStatusFXShow = useSelector((state) => state.isStatusFXShow);
  const loading = useSelector((state) => state.loader);
  const currentID = useSelector((state) => state.currentID);

  return (
    <div className="actList_container">
      <h2 className={`cateTitle ${titleColor}`}>{cateTitle} </h2>
      <Grid container spacing={3}>
        {cateList.map((cate, index) => {
          return (
            <Grid key={index} item xs={4} sm={3} md={2.4}>
              <div className="actCard">
                <img
                  onClick={() =>
                    handleClick(cate.title, cate.imgFile, cate.cal)
                  }
                  className="actImg"
                  src={cate.imgFile}
                  alt={cate.title}
                />
                <p className="actName">
                  {cate.title} <br />
                  <span className="actCal">{cate.cal} kcal </span>
                </p>
              </div>
            </Grid>
          );
        })}
        <hr />
      </Grid>

      <FormCreate
        activity={activity}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        titleStatus="Create New Activity"
        titleButton="Create"
      />

      {isStatusFXShow && <StatusFX status="Success" />}
    </div>
  );
}

export default ActivityCategory;
