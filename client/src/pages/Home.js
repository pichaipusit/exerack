import {
  Avatar,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LastRecord from "../components/LastRecord";
import running from "../images/outdoor/running.jpeg";
import "./home.css";

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

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

        <section className="last-record">
          {/* Will use map */}
          <LastRecord matches={matches} />
          <LastRecord matches={matches} />
        </section>
      </Container>
    </div>
  );
}

export default Home;
