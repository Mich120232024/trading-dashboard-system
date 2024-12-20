import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "../mainlayout/Index";
import "./App.css";

const App = () => (
  <Router>
    <div className="bg-gray-900 min-h-screen text-white">
      <MainLayout />
    </div>
  </Router>
);

export default App;
