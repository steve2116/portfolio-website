import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeProvider } from "./contexts/light-dark.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
