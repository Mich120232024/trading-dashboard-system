/// <reference types="vite/client" />

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import App from "./App";
import "./index.css";

interface ImportMetaEnv {
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>
);

if (import.meta.env.DEV) {
  window.onerror = (msg, src, line, col, err) => {
    console.error("Global error:", { msg, src, line, col, err });
    return false;
  };
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
