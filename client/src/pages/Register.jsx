import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AuthContext } from "../context/authContext";

const useStyles = makeStyles({
  registerPageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "900px",
    height: "100vh",
  },
  registerWrapper: {
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
    height: "50%",
  },
});

const Register = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await register(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className={classes.registerPageWrapper}>
      <div className={classes.registerWrapper}>
        <h1>Login</h1>
        <form className={classes.formContainer}>
          <TextField
            required
            id="standard-name-input"
            label="Full Name"
            type="text"
            name="userName"
            value={inputs.userName}
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
            error={!!error}
            helperText={error}
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
          <Button variant="outlined" onClick={handleSubmit}>
            register
          </Button>
          <span>
            Do you have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
