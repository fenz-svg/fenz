import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FenzLanding from "./FenzLanding.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FenzLanding />
  </StrictMode>
);
