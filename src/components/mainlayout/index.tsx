import React from "react";

// Fix import paths
import Sidebar from "../../components/Sidebar";
import ChartSection from "../../components/chartsection";
import { TradeList } from "../../components/tradelist/Index";

// Add type definitions
interface Trade {
  id: string;
  status: "SUCCESS" | "PENDING" | "FAILED";
  type: string;
  dateRange: { start: string; end: string };
  completion: number;
}

interface ChartData {
  date: string;
  value: number;
}

interface SidebarProps {
  onNavigate: (itemId: string, subItemId?: string) => void;
}

const LocalSidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return <div>{/* Sidebar implementation */}</div>;
};

const MainLayout = () => {
  const [selectedTrade, setSelectedTrade] = React.useState<Trade | null>(null);

  const dummyTrades: Trade[] = [];
  const dummyPerformanceData: ChartData[] = [];
  const dummyDrawdownData: ChartData[] = [];

  const handleNavigation = (itemId: string, subItemId?: string) => {
    console.log("Navigating to:", itemId, subItemId);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <LocalSidebar onNavigate={handleNavigation} />
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
