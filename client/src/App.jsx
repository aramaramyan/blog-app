import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
