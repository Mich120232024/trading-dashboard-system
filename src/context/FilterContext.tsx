// src/context/FilterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterState {
  dateRange: string;
  comparison: string;
}

interface FilterContextType {
  filters: FilterState;
  setDateRange: (range: string) => void;
  setComparison: (type: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: "1M",
    comparison: "benchmark",
  });

  const setDateRange = (range: string) => {
    setFilters((prev) => ({ ...prev, dateRange: range }));
  };

  const setComparison = (type: string) => {
    setFilters((prev) => ({ ...prev, comparison: type }));
  };

  return (
    <FilterContext.Provider value={{ filters, setDateRange, setComparison }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within FilterProvider");
  }
  return context;
};

export default FilterProvider;
