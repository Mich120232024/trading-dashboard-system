// src/MainLayout.tsx
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChartSection from "../ChartSection";
import { TradeList } from "./TradeList";

const MainLayout = () => {
  const [selectedTrade, setSelectedTrade] = React.useState<any>(null);
  const dummyTrades = []; // Replace with actual trades data
  const dummyPerformanceData = []; // Replace with actual performance data
  const dummyDrawdownData = []; // Replace with actual drawdown data

  const handleNavigation = (itemId: string, subItemId?: string) => {
    console.log("Navigating to:", itemId, subItemId);
    // Implement your navigation logic here
    // Could use React Router or state management
  };

  return (
    <div className="flex h-screen bg-dark">
      <Sidebar onNavigate={handleNavigation} />
      <div className="flex-1 overflow-auto">
        <TradeList trades={dummyTrades} onTradeSelect={setSelectedTrade} />
        <ChartSection
          performanceData={dummyPerformanceData}
          drawdownData={dummyDrawdownData}
        />
      </div>
    </div>
  );
};

export default MainLayout;
