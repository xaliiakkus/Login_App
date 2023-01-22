import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */
import Username from "./Components/UserName";
import Password from "./Components/Password";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Recovery from "./Components/Recovery";
import Reset from "./Components/Reset";
import PageNotFound from "./Components/PageNotFound";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
