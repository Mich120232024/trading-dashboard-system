// src/components/Sidebar/Sidebar.tsx
import React, { useState } from "react";
import {
  ChartBarIcon,
  ClockIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import "../../App.css"; // Update the import path

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: { id: string; label: string }[];
}

export const navigationItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <ChartBarIcon className="w-6 h-6" />,
  },
  {
    id: "trades",
    label: "Trades",
    icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
    subItems: [
      { id: "active", label: "Active Trades" },
      { id: "history", label: "Trade History" },
      { id: "pending", label: "Pending Orders" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <DocumentChartBarIcon className="w-6 h-6" />,
    subItems: [
      { id: "performance", label: "Performance" },
      { id: "risk", label: "Risk Analysis" },
      { id: "portfolio", label: "Portfolio" },
    ],
  },
  {
    id: "history",
    label: "History",
    icon: <ClockIcon className="w-6 h-6" />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <CogIcon className="w-6 h-6" />,
  },
];

interface SidebarProps {
  onNavigate: (itemId: string, subItemId?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleItemClick = (itemId: string) => {
    if (navigationItems.find((item) => item.id === itemId)?.subItems) {
      setExpandedItem(expandedItem === itemId ? null : itemId);
    } else {
      onNavigate(itemId);
    }
  };

  return (
    <div
      className={`
        bg-[#2a2b36] 
        h-screen 
        transition-all 
        duration-300 
        flex 
        flex-col
        ${isCollapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <span className="text-lg font-semibold text-white">Trading Hub</span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-[#1a1b26] text-gray-400 hover:text-white"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navigationItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleItemClick(item.id)}
              className={`
                w-full 
                flex 
                items-center 
                px-4 
                py-3
                text-gray-300 
                hover:bg-[#1a1b26] 
                hover:text-white
                transition-colors
                ${expandedItem === item.id ? "bg-[#1a1b26] text-white" : ""}
              `}
            >
              <span className="flex items-center">
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </span>
              {!isCollapsed && item.subItems && (
                <ChevronRightIcon
                  className={`
                    w-4 
                    h-4 
                    ml-auto 
                    transition-transform
                    ${expandedItem === item.id ? "rotate-90" : ""}
                  `}
                />
              )}
            </button>

            {/* Sub Items */}
            {!isCollapsed && item.subItems && expandedItem === item.id && (
              <div className="bg-[#1a1b26] py-2">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => onNavigate(item.id, subItem.id)}
                    className="
                      w-full 
                      text-left 
                      px-12 
                      py-2 
                      text-sm 
                      text-gray-300 
                      hover:text-white
                      hover:bg-[#2a2b36]
                      transition-colors
                    "
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500" />
          {!isCollapsed && (
            <div className="ml-3">
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-gray-400">Premium Account</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// import { Sidebar } from './components/Sidebar/Sidebar';
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
