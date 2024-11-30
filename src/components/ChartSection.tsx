// src/components/ChartSection.tsx

import React, { memo } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartData, ChartSectionProps } from "../types";

export const ChartSection = memo(
  ({ performanceData, drawdownData }: ChartSectionProps) => {
    const chartColors = {
      drawdownPositive: "#00ff00",
      drawdownNegative: "#ff0000",
      portfolio: "#8884d8",
      benchmark: "#82ca9d",
      active: "#ffc658",
    };

    return (
      <div className="grid grid-cols-2 gap-4">{/* Component content */}</div>
    );
  }
);

export default ChartSection;
