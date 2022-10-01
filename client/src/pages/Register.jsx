import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Login from "./Login";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    height: "50%",
  },
});

const Register = () => {
  const classes = useStyles();

  return (
    <Stack direction="column" spacing={2}>
      <h1>Login</h1>
      <form className={classes.formContainer}>
        <TextField
          required
          id="standard-name-input"
          label="Full Name"
          type="text"
          autoComplete="current-name"
          variant="standard"
        />
        <TextField
          required
          id="standard-email-input"
          label="Email"
          type="text"
          autoComplete="current-email"
          variant="standard"
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button variant="outlined">register</Button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </Stack>
  );
};

export default Register;
