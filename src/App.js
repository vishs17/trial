import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContributorDashboard from "./components/ContributorDashboard";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContributorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
