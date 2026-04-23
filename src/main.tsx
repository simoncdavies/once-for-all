import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles.css";
import { SuppliersProvider } from "./context/suppliers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuppliersProvider>
        <App />
      </SuppliersProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
