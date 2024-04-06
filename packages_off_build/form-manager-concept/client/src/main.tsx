import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextStoreProvider, AppLanding, AppShell } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextStoreProvider>
      <AppShell />
    </AppContextStoreProvider>
  </React.StrictMode>
);
