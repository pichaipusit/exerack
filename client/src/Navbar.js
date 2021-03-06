import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./App.css";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import { logoS, navbarS } from "./NavbarStyle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

function Navbar() {
  const [navmenus, setNavmenus] = useState(["Home", "Activities", "Profile"]);
  const [navbar, setNavbar] = useState(navbarS);
  const [logo, setLogo] = useState(logoS);
  const [indexSelected, setIndexSelected] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleClick = () => {
    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar position="static" sx={navbar}>
          <Toolbar>
            <h3 className={`logoText ${matches && "show-logo"}`}>Exerack</h3>
            <AlignVerticalCenterIcon sx={logo} />

            <div className="add-container">
              <Tooltip title="Create new activity">
                <Link to="/activities" style={{ cursor: "pointer" }}>
                  <AddCircleOutlineIcon
                    onClick={handleClick}
                    sx={{
                      color: "orange",
                      cursor: "pointer",
                      marginLeft: "20px",
                      fontSize: "35px",
                      transform: isPressed ? "scale(0.8)" : "scale(1)",
                    }}
                  />
                </Link>
              </Tooltip>
            </div>

            <ul className="navlinks">
              {navmenus.map((item, index) => {
                return (
                  <Link
                    to={item === "Home" ? `/` : `${item.toLowerCase()}`}
                    key={index}
                    className={`navmenu ${
                      index === indexSelected && "selected"
                    }`}
                    onClick={() => setIndexSelected(index)}
                  >
                    <li>{item}</li>
                  </Link>
                );
              })}
            </ul>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default Navbar;
