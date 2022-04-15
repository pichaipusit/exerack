import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import ActivityCategory from "../components/ActivityCategory";
import "./Activities.css";
import activityData from "./dataForTest";
import FormCreate from "../components/Forms/FormCreate";

function Activities() {
  const [popularList, setPopularList] = useState([]);
  const [indoorList, setIndoorList] = useState([]);
  const [outdoorList, setOutdoorList] = useState([]);
  // Just for testing

  useEffect(() => {
    // const {data} = axios.get()
    // setIndoorActs() data.map((item,index) => item.category === '')
    setIndoorList(activityData.slice(0, 5));
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <section className="quote-sect" style={{ marginBottom: "70px" }}>
          <h4>
            " It's not always easy, but it's always <span>worth</span> it. "
            <br /> Choose Your Activity
          </h4>
        </section>

        <section className="popular-sect">
          <ActivityCategory
            cateTitle="Most Popular"
            cateList={indoorList}
            titleColor="orange"
          />
        </section>

        <section className="indoor-sect">
          <ActivityCategory cateTitle="Indoor" cateList={indoorList} />
        </section>
        <section className="indoor-sect">
          <ActivityCategory cateTitle="Outdoor" cateList={indoorList} />
        </section>

        <FormCreate />
      </Container>
    </div>
  );
}

export default Activities;
