import { Avatar } from "@mui/material";
import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default Profile;
