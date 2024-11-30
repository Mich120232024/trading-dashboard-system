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
      <div className="grid grid-cols-2 gap-4">
        {/* Performance Chart */}
        <div className="bg-[#2a2b36] p-4 rounded">
          <h3 className="mb-4 text-lg font-semibold text-white">Performance</h3>
          <LineChart width={600} height={300} data={performanceData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
              vertical={false}
            />
            <XAxis dataKey="date" stroke="#fff" tick={{ fill: "#fff" }} />
            <YAxis
              stroke="#fff"
              tick={{ fill: "#fff" }}
              domain={[-1000, 2500]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1b26",
                border: "1px solid #333",
                borderRadius: "4px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="portfolio"
              stroke={chartColors.portfolio}
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke={chartColors.benchmark}
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke={chartColors.active}
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </div>

        {/* Drawdown Chart */}
        <div className="bg-[#2a2b36] p-4 rounded">
          <h3 className="mb-4 text-lg font-semibold text-white">Drawdown</h3>
          <AreaChart width={600} height={300} data={drawdownData}>
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="50%"
                  stopColor={chartColors.drawdownPositive}
                  stopOpacity={0.3}
                />
                <stop
                  offset="50%"
                  stopColor={chartColors.drawdownNegative}
                  stopOpacity={0.3}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
              vertical={false}
            />
            <XAxis dataKey="date" stroke="#fff" tick={{ fill: "#fff" }} />
            <YAxis stroke="#fff" tick={{ fill: "#fff" }} domain={[-500, 500]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1b26",
                border: "1px solid #333",
                borderRadius: "4px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="drawdown"
              stroke={chartColors.drawdownPositive}
              fill="url(#splitColor)"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
);

export default ChartSection;
