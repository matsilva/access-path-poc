import { SEVERITY_COLORS } from '../constants/colors';

export interface InsightDataPoint {
  name: string;
  severity: keyof typeof SEVERITY_COLORS;
  value: number;
  status?: 'open' | 'closed';
}

export interface ActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: InsightDataPoint;
  percent: number;
  value: number;
  mouseX?: number;
  mouseY?: number;
}
