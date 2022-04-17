import { Box, Grid, Popper } from "@mui/material";
import React, { useState } from "react";
import "./history.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function History({ matches }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [flexSpace, setFlexSpace] = useState({
    display: "flex",
    justifyContent: "space-evenly",
  });
  const [dotIcon, setDotIcon] = useState({
    transform: "rotate(90deg)",
    cursor: "pointer",
    marginTop: "10px",
    color: "rgb(193, 191, 191)",
  });

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onRemove = () => {};

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="history">
      <Grid container>
        <Grid item xs={4} textAlign="center" sx={matches && flexSpace}>
          <p className="date">10/05/2022</p>
          <p className="date">Note</p>
        </Grid>

        <Grid item xs={3.5} textAlign="center" sx={matches && flexSpace}>
          <p>Running</p>
          <p>1:45 min</p>
        </Grid>

        <Grid item xs={4} textAlign="center" sx={matches && flexSpace}>
          <p>Goal: 500 cal</p>
          <p className="burn-cal">Burn 240 cal</p>
        </Grid>
        <Grid item xs={0.5} textAlign="left">
          <MoreHorizIcon
            aria-describedby={id}
            type="button"
            onClick={handleClick}
            sx={dotIcon}
          />

          <Popper id={id} open={open} anchorEl={anchorEl}>
            <button onClick={onRemove} type="button" className="remove-btn">
              Remove
            </button>
          </Popper>
        </Grid>
      </Grid>
    </div>
  );
}

export default History;
