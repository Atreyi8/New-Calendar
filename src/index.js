import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextWrapper from "./context/ContextWrapper";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </StrictMode>
);
