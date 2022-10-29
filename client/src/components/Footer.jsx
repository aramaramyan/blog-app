import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerWrapper: {
    position: "sticky",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    padding: "0 10px",
    backgroundColor: "whitesmoke",
    borderRadius: "4px 4px 0 0",
    backdropFilter: "blur(4.9px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.logoWrapper}>
        <span>Blog App</span>
      </div>
      <span>Made by Aram Aramyan | 2022</span>
    </div>
  );
};

export default Footer;
