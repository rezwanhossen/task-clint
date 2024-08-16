import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Error from "./Components/Error/Error.jsx";
import Login from "./Components/LoginAndReg/Login.jsx";
import FirebaseProvider from "./Components/FirbaseProv/FirebaseProvider.jsx";
import Register from "./Components/LoginAndReg/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      {" "}
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
