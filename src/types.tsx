import React, { FC } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const handleNavigation = (itemId, subItemId) => {
    console.log("Navigating to:", itemId, subItemId);
    // Implement your navigation logic here
    // Could use React Router or state management
  };

  return (
    <div className="flex">
      <Sidebar onNavigate={handleNavigation} />
      <main className="flex-1">{/* Your main content */}</main>
    </div>
  );
};

export default App;

// src/types.ts

// Define the ChartData interface
export interface ChartData {
  date: string;
  drawdown?: number;
  portfolio?: number;
  benchmark?: number;
  active?: number;
}

// Define the ChartSectionProps interface
export interface ChartSectionProps {
  performanceData: ChartData[];
  drawdownData: ChartData[];
}
