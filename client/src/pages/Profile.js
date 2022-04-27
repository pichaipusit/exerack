import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import FormProfile from "../components/Forms/FormProfile";
import hiking from "../images/outdoor/hiking.jpeg";

function Profile() {
  const profileInfo = useSelector((state) => state.profileInfo);
  const { name, weight, height, age, email } = profileInfo;
  return (
    <article className="profile-container">
      <Avatar
        alt="Remy Sharp"
        src={hiking}
        sx={{ width: "100px", height: "100px" }}
      />

      <div className="profile-info">
        <p>Username: {name} </p>
        <div className="profile-shape">
          <p>Weight: {weight} kg</p>
          <p>Height: {height} cm</p>
          <p>Age: {age} </p>
        </div>
        <p>Email: {email} </p>
      </div>
    </article>
  );
}

export default Profile;
