import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import RouterApp from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>
);
