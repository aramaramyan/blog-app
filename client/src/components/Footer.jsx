import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "./../img/MAGNAT DESIGN-min.PNG";

const useStyles = makeStyles({
  footerWrapper: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "whitesmoke",
    borderRadius: "12px 12px 0 0",
    backdropFilter: "blur(4.9px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
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

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="Magnat Logo" className={classes.logo} />
        <span>MAGNAT Blog</span>
      </div>
      <span>Made by Aram Aramyan | 2022</span>
    </div>
  );
};

export default Footer;
