import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import Register from "./Components/Register";
import CreatePost from "./Components/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Posts",
        element: <Posts />,
      },
      {
        path: "/Register",
        element: <Register />,
      },

      {
        path: "CreatePost",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
