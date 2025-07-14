import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./KiemTra/App";
//import App from "./Components/App";
//import App from "./Lession09/Demo/App";
// import App from "./Lession07/App";
//import App from "./Lession08/App";
// import './index.css'
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
