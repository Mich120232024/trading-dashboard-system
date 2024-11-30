// src/components/common/StatusIcon.tsx
import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface StatusIconProps {
  status: "SUCCESS" | "PENDING" | "FAILED";
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const colors = {
    SUCCESS: "#00ff00",
    PENDING: "#ffa500",
    FAILED: "#ff4444",
  };

  return (
    <div className="relative">
      <div
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: colors[status] }}
      >
        {status === "SUCCESS" && (
          <CheckIcon className="absolute inset-0 w-3 h-3 m-auto text-white" />
        )}
      </div>
    </div>
  );
};
