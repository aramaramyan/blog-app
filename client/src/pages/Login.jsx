import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const Login = () => {
  const classes = useStyles();

  return (
    <Stack direction="column" spacing={2}>
      <h1>Login</h1>
      <form className={classes.formContainer}>
        <TextField
          required
          id="standard-password-input"
          label="Email"
          type="text"
          autoComplete="current-password"
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
        <Button variant="outlined">Login</Button>
        <span>
          Don't you have an account? <Link to="/register" />
          Register
        </span>
      </form>
    </Stack>
  );
};

export default Login;
