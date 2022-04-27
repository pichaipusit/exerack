import {
  Avatar,
  CircularProgress,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LastRecord from "../components/LastRecord";
import hiking from "../images/outdoor/hiking.jpeg";
import "./home.css";
import HistoryList from "../components/HistoryList";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecords } from "../actions/records";

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [isHistoryView, setIsHistoryView] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const records = useSelector((state) => state.records);
  const profileInfo = useSelector((state) => state.profileInfo);

  useEffect(() => {
    dispatch(getAllRecords());
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{ display: matches && "flex", alignItems: "center" }}
          >
            <Avatar alt="Remy Sharp" src={hiking} sx={{ margin: "20px" }} />
            <p className={`username ${!matches && "mgLeft"}`}>
              {profileInfo.name}
            </p>
          </Grid>
          <Grid item xs={5}>
            <h2 className="home-title">Your Progress</h2>
          </Grid>
        </Grid>

        {loading ? (
          <div className="circular">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <section className="last-record">
            {records
              .slice(-2)
              .reverse()
              .map((lasRec) => {
                return (
                  <LastRecord
                    key={lasRec._id}
                    matches={matches}
                    lasRec={lasRec}
                  />
                );
              })}
          </section>
        )}

        <div className="history-btn-container">
          <button
            onClick={() => setIsHistoryView(!isHistoryView)}
            // onClick={handleClick}
            className="history-btn btn"
          >
            View history
          </button>
        </div>
        <section className="history-sect">
          {isHistoryView && <HistoryList />}
        </section>
      </Container>
    </div>
  );
}

export default Home;
