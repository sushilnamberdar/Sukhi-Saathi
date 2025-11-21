import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { CookieConsentProvider } from "./pages/Cookie/CookieConsent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookieConsentProvider>
      <App />
      <Toaster position="top-right" toastOptions={{
        duration: 4000
      }} />
    </CookieConsentProvider>
  </React.StrictMode>
);
