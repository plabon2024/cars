import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";


import Home from "./components/Home";
import mainlayout from "./layout/mainlayout";
import login from "./pages/login";
import Register from "./pages/login";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: mainlayout,
    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
