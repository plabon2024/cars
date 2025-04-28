import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";


import Home from "./components/Home";
import mainlayout from "./layout/mainlayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




const routes = createBrowserRouter([
  {
    path: "/",
    Component: mainlayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
