// src/types/index.ts
export interface ChartData {
  date: string;
  drawdown?: number;
  portfolio?: number;
  benchmark?: number;
  active?: number;
}

export interface ChartSectionProps {
  performanceData: ChartData[];
  drawdownData: ChartData[];
}
