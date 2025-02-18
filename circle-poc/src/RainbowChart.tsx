import { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { insightData, transformInsightData, transformInsightDataByStatus } from './data';

const data = transformInsightData(insightData);
const dataByStatus = transformInsightDataByStatus(insightData);

const fillFromSeverityStatus = (severity: string, status: string) => {
  const key = `${severity}_${status}`;
  switch (key) {
    case 'critical_open':
      return '#E73E51';
    case 'high_open':
      return '#E97A0A';
    case 'medium_open':
      return '#F7BD0033';
    case 'low_open':
      return '#0DB15F';
    default:
      return 'none';
  }
};

const fillFromSeverity = (severity: string) => {
  switch (severity) {
    case 'critical':
      return '#E73E51';
    case 'high':
      return '#E97A0A';
    case 'medium':
      return '#F7BD0033';
    case 'low':
      return '#0DB15F';
  }
};

const renderActiveShape = (props: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: { name: string; severity: string };
  percent: number;
  value: number;
}) => {
  const fill = fillFromSeverity(props.payload.severity);
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const textAnchor = cos >= 0 ? 'start' : 'end';
  // Position the popover
  const popoverX = cx + innerRadius * cos;
  const popoverY = cy + innerRadius * sin;

  const xOffset = cos >= 0 ? 10 : -10;

  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />

      {/* popove rect */}
      <rect
        x={popoverX - (cos >= 0 ? 10 : 120)}
        y={popoverY - 25}
        width={120}
        height={60}
        rx={4}
        fill="white"
        stroke={fill}
        strokeWidth={2}
      />

      {/* Severity text */}
      <text x={popoverX + xOffset} y={popoverY} textAnchor={textAnchor} fill={fill} fontWeight="bold">
        {payload.severity.toUpperCase()}
      </text>

      {/* Percentage text */}
      <text x={popoverX + xOffset} y={popoverY + 20} textAnchor={textAnchor} fill="#666">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={1200} height={900}>
      {/* this is for shading */}
      <Pie
        activeIndex={activeIndex}
        startAngle={210}
        endAngle={-30}
        data={dataByStatus}
        cx={600}
        cy={600}
        innerRadius={150}
        outerRadius={520}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {dataByStatus.map((entry, index) => (
          <Cell key={`cell-${index}`} opacity={0.2} fill={fillFromSeverityStatus(entry.severity, entry.status)} />
        ))}
      </Pie>
      {/* this is by severity */}
      <Pie
        activeIndex={activeIndex}
        // @ts-expect-error - boo
        activeShape={renderActiveShape}
        startAngle={210}
        endAngle={-30}
        data={data}
        cx={600}
        cy={600}
        innerRadius={500}
        outerRadius={520}
        cornerRadius={10}
        // fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={fillFromSeverity(entry.severity)} />
        ))}
      </Pie>
      {/* this is for severity by status */}
      <Pie
        activeIndex={activeIndex}
        startAngle={210}
        endAngle={-30}
        data={dataByStatus}
        cx={600}
        cy={600}
        innerRadius={400}
        outerRadius={415}
        // fill="#8884d8"
        dataKey="value"
        cornerRadius={10}
        onMouseEnter={onPieEnter}
      >
        {dataByStatus.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={fillFromSeverity(entry.severity)} />
        ))}
      </Pie>
    </PieChart>
  );
}
