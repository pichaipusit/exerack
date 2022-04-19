import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import ActivityCategory from "../components/ActivityCategory";
import "./Activities.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllActs } from "../actions/activities";
import StatusFX from "../components/Forms/StatusFX";

function Activities() {
  const dispatch = useDispatch();
  const activityList = useSelector((state) => state.activities);
  const loading = useSelector((state) => state.loader);
  const [isStatusFXShow, setIsTest] = useState(false);

  const [actCates, setActCates] = useState([
    "Most popular",
    "Indoor",
    "Outdoor",
  ]);

  useEffect(() => {
    dispatch(getAllActs());
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <section className="quote-sect" style={{ marginBottom: "70px" }}>
          <h4>
            " It's not always easy, but it's always
            <span className="worth">worth</span> it. "
            <br /> <span className="choose">Choose Your Activity</span>
          </h4>
        </section>

        {/* Display 3 ActivityCategory section */}
        {loading ? (
          <div className="circular">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          actCates.map((cate, index) => {
            return (
              <ActivityCategory
                key={index}
                cateTitle={cate}
                cateList={activityList.filter((act) => act.category === cate)}
                titleColor={cate === "Most popular" && "orange"}
              />
            );
          })
        )}
      </Container>
    </div>
  );
}

export default Activities;
