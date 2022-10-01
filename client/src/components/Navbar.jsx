import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "./../img/MAGNAT DESIGN-min.PNG";

const useStyles = makeStyles({
  navbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "whitesmoke",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="Magnat Logo" className={classes.logo} />
        <span>MAGNAT Blog</span>
      </div>
      <Stack direction="row" spacing={2}>
        <Link to="/?cat=art">
          <h6>ART</h6>
        </Link>
        <Link to="/?cat=science">
          <h6>SCIENCE</h6>
        </Link>
        <Link to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link to="/?cat=cinema">
          <h6>CINEMA</h6>
        </Link>
        <Link to="/?cat=design">
          <h6>DESIGN</h6>
        </Link>
        <Link to="/?cat=food">
          <h6>FOOD</h6>
        </Link>
        <span>John</span>
        <span>Logout</span>
        <span>
          <Link to="/write">Write</Link>
        </span>
      </Stack>
    </div>
  );
};

export default Navbar;
