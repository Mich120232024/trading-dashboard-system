export interface Trade {
  id: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  type: 'Market' | 'Limit' | 'Stop';
  dateRange: {
    start: string;
    end: string;
  };
  completion: number;
  access: string;
  message: string;
}

export interface ChartData {
  date: string;
  portfolio: number;
  benchmark: number;
  active: number;
  drawdown: number;
}

export interface FilterState {
  status: string[];
  dateRange: {
    start: string;
    end: string;
  };
  type: string[];
  search: string;
}