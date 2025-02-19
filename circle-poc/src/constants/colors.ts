import { InsightDataPoint } from '../types/chart';

export const SEVERITY_COLORS = {
  critical: '#E73E51',
  high: '#E97A0A',
  medium: '#F7BD0033',
  low: '#0DB15F',
} as const;

export const STATUS_SEVERITY_COLORS = {
  critical_open: SEVERITY_COLORS.critical,
  high_open: SEVERITY_COLORS.high,
  medium_open: SEVERITY_COLORS.medium,
  low_open: SEVERITY_COLORS.low,
} as const;

export const getStatusFill = (entry: InsightDataPoint) => {
  if (!isSeverity(entry.severity)) return 'none';
  const key = `${entry.severity}_${entry.status}` as keyof typeof STATUS_SEVERITY_COLORS;
  return STATUS_SEVERITY_COLORS[key] ?? 'none';
};

export const isSeverity = (value: string): value is keyof typeof SEVERITY_COLORS => {
  return Object.keys(SEVERITY_COLORS).includes(value);
};
