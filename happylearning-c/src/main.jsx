import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";

// Creating a root container for the React app and rendering the App component within StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
