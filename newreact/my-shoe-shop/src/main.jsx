import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  <UserContext>
    <App/>
  </UserContext>
);