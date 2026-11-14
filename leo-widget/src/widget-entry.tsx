import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import css from "./index.css?inline";

// Self-mounting embed. Everything lives in a shadow root: the widget ships
// Tailwind's reset (preflight), which would restyle safestorage.ae itself if it
// were injected into the page, and the site's own CSS cannot reach in either.
(function mount() {
  const id = "safestorage-leo-root";
  if (document.getElementById(id)) return;

  const host = document.createElement("div");
  host.id = id;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = css;
  shadow.appendChild(style);

  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

  ReactDOM.createRoot(mountPoint).render(
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  );
})();
