import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./statusFX.css";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/actionTypes";

function StatusFX({ status }) {
  const [isTick, setIsTick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTick(true);
    }, 100);
    setIsTick(false);

    const timeout2 = setTimeout(() => {
      dispatch({ type: actions.SHOW_FX, payload: false });
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="statusFX-container">
      <div className="check-ic-container">
        <div className={`no-tick ${isTick && "tick"}`}>
          <CheckIcon sx={{ fontSize: "60px" }} />
        </div>
      </div>
      <h2 className={`no-fadein ${isTick && "fadein"}`}>{status}</h2>
    </div>
  );
}

export default StatusFX;
