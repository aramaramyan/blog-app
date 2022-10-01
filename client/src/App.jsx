import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Register from "./pages/Register";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Container maxWidth="md" className={classes.container}>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
