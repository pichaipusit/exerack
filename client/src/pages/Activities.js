import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ActivityCategory from "../components/ActivityCategory";
import "./Activities.css";
import activityData from "./dataForTest";
import FormCreate from "../components/Forms/FormCreate";

function Activities() {
  const [popularList, setPopularList] = useState([]);
  const [indoorList, setIndoorList] = useState([]);
  const [outdoorList, setOutdoorList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
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
            " It's not always easy, but it's always{" "}
            <span className="worth">worth</span> it. "
            <br /> <span className="choose">Choose Your Activity</span>
          </h4>
        </section>

        {/* Will use map */}
        <section className="popular-sect">
          <ActivityCategory
            cateTitle="Most Popular"
            cateList={indoorList}
            titleColor="orange"
            setIsModalOpen={setIsModalOpen}
          />
        </section>

        <section className="indoor-sect">
          <ActivityCategory
            cateTitle="Indoor"
            cateList={indoorList}
            setIsModalOpen={setIsModalOpen}
          />
        </section>
        <section className="indoor-sect">
          <ActivityCategory
            cateTitle="Outdoor"
            cateList={indoorList}
            setIsModalOpen={setIsModalOpen}
          />
        </section>

        <FormCreate isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Container>
    </div>
  );
}

export default Activities;
