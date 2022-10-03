import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
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

const Register = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Stack direction="column" spacing={2}>
      <h1>Login</h1>
      <form className={classes.formContainer}>
        <TextField
          required
          id="standard-name-input"
          label="Full Name"
          type="text"
          name="username"
          value={inputs.username}
          autoComplete="current-name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          id="standard-email-input"
          label="Email"
          type="text"
          name="email"
          value={inputs.email}
          autoComplete="current-email"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          value={inputs.password}
          autoComplete="current-password"
          variant="standard"
          onChange={handleChange}
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
