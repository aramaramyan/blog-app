import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  loginPageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "900px",
    height: "100vh",
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    width: "300px",
    height: "400px",
    borderRadius: 4,
    border: "1px solid blue",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: "50%",
  },
  noAccount: {
    fontSize: 12,
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
    <div className={classes.loginPageWrapper}>
      <div className={classes.loginWrapper}>
        <h3>👋 Welcome back!</h3>
        <h2>Login</h2>
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
          <span className={classes.noAccount}>Don't you have an account?</span>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
