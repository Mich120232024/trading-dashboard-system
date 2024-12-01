// src/components/TradeList.tsx
import React, { memo } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { StatusIcon } from "../components/common/StatusIcon";

interface Trade {
  id: string;
  status: "SUCCESS" | "PENDING" | "FAILED";
  type: string;
  dateRange: {
    start: string;
    end: string;
  };
  completion: number;
}

interface TradeListProps {
  trades: Trade[];
  onTradeSelect: (trade: Trade) => void;
}

export const TradeList = memo(({ trades, onTradeSelect }: TradeListProps) => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: trades.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-[500px] overflow-auto">
      <table className="w-full">
        <thead className="sticky top-0 bg-[#1a1b26]">
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Type</th>
            <th>Date Range</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const trade = trades[virtualRow.index];
            return (
              <tr
                key={trade.id}
                style={{ height: virtualRow.size }}
                onClick={() => onTradeSelect(trade)}
              >
                <td>
                  <StatusIcon status={trade.status} />
                </td>
                <td>{trade.id}</td>
                <td>{trade.type}</td>
                <td>{`${trade.dateRange.start} - ${trade.dateRange.end}`}</td>
                <td>{trade.completion}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
