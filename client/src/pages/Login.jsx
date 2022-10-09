import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
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
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: null,
    password: null,
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log(`:::err:::`, err);
      if (err.response.data === "email") {
        setError((prev) => ({ ...prev, email: "Wrong email" }));
      } else {
        setError((prev) => ({ ...prev, password: "Wrong password" }));
      }
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <h1>Login</h1>
      <form className={classes.formContainer}>
        <TextField
          required
          id="standard-email-input"
          label="Email"
          type="text"
          name="email"
          value={inputs.email}
          autoComplete="current-email"
          variant="standard"
          error={!!error.email}
          helperText={error.email}
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
          error={!!error.password}
          helperText={error.password}
          onChange={handleChange}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Login
        </Button>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </Stack>
  );
};

export default Login;
