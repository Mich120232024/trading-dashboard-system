import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./MainLayout";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-primary-dark min-h-screen">
        <MainLayout />
      </div>
    </Router>
  );
};

export default App;
