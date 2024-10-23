import React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "././styles/index.css";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
