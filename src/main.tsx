import "@fontsource/inter";
import "@fontsource/space-grotesk";
import "@fontsource/jetbrains-mono";

import React from "react";
import ReactDOM from "react-dom/client";
import { FormspreeProvider } from "@formspree/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormspreeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormspreeProvider>
  </React.StrictMode>,
);
