import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { LanguageProvider } from "./Context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
