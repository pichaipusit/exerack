import { Grid } from "@mui/material";
import React from "react";
import "../pages/Activities.css";

function ActivityCategory({ cateTitle, cateList, titleColor = "normal" }) {
  const handleClick = () => {};
  return (
    <div className="actList_container">
      <h2 className={`cateTitle ${titleColor}`}>{cateTitle} </h2>
      <Grid container spacing={3}>
        {cateList.map((cate, index) => {
          return (
            <Grid key={index} item xs={4} sm={3} md={2.4}>
              <div className="actCard" onClick={handleClick}>
                <img className="actImg" src={cate.img} alt={cate.title} />
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
    </div>
  );
}

export default ActivityCategory;
