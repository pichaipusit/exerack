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
import running from "../images/outdoor/running.jpeg";
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
  const [lastRecords, setLastRecords] = useState(records.slice(-2));

  useEffect(() => {
    dispatch(getAllRecords());
  }, []);

  const handleClick = () => {
    console.log(lastRecords);
  };
  return (
    <div>
      <Container maxWidth="md">
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{ display: matches && "flex", alignItems: "center" }}
          >
            <Avatar alt="Remy Sharp" src={running} sx={{ margin: "20px" }} />
            <p className={`username ${!matches && "mgLeft"}`}>Saladpak</p>
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
            {/* Will use map */}
            {lastRecords.map((lasRec) => {
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
          {isHistoryView && <HistoryList matches={matches} />}
        </section>
      </Container>
    </div>
  );
}

export default Home;
