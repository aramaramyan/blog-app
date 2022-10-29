import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Register from "./pages/Register";
import { Container } from "@mui/material";
import backgroundImg from "./img/background.jpeg";

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

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${backgroundImg}) 0 0/cover no-repeat`,
      }}
    >
      <Container
        maxWidth="md"
        fixed
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
