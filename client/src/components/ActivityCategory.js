import { Grid } from "@mui/material";
import React, { useState } from "react";
import "../pages/Activities.css";
import { useDispatch, useSelector } from "react-redux";
import FormCreate from "./Forms/FormCreate";

function ActivityCategory({ cateTitle, cateList, titleColor = "normal" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activity, setActivity] = useState({ title: "", imgFile: "" });

  const handleClick = (title, imgFile) => {
    setIsModalOpen(true);
    setActivity({ title: title, imgFile: imgFile });
  };

  return (
    <div className="actList_container">
      <h2 className={`cateTitle ${titleColor}`}>{cateTitle} </h2>
      <Grid container spacing={3}>
        {cateList.map((cate, index) => {
          return (
            <Grid key={index} item xs={4} sm={3} md={2.4}>
              <div className="actCard">
                <img
                  onClick={() => handleClick(cate.title, cate.imgFile)}
                  className="actImg"
                  src={cate.imgFile}
                  alt={cate.title}
                />
                <p className="actName">
                  {cate.title} <br />
                  <span className="actCal">≈ {cate.cal} cal </span>
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
      />
    </div>
  );
}

export default ActivityCategory;
