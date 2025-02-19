import { useCallback, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { insightData, transformInsightData, transformInsightDataByStatus } from './data';
import { SEVERITY_COLORS, getStatusFill, isSeverity } from './constants/colors';
import { ActiveShape } from './components/ActiveShape';
import { InsightDataPoint } from './types/chart';
import { InsightTooltip } from './components/InsightTooltip';

const data = transformInsightData(insightData);
const dataByStatus = transformInsightDataByStatus(insightData) as InsightDataPoint[];

/**
 * RainbowChart displays insight data in a multi-layered pie chart
 * showing severity and status distribution of issues
 */
export default function RainbowChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_: unknown, index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <PieChart width={1200} height={900}>
      {/* Shading layer */}
      <Pie
        activeIndex={activeIndex}
        //@ts-expect-error - This is fine
        activeShape={ActiveShape}
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
          <Cell key={`cell-${index}`} opacity={0.2} fill={getStatusFill(entry)} />
        ))}
      </Pie>

      {/* Severity layer */}
      <Pie
        startAngle={210}
        endAngle={-30}
        data={data}
        cx={600}
        cy={600}
        innerRadius={500}
        outerRadius={520}
        cornerRadius={10}
        stroke="none"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={isSeverity(entry.severity) ? SEVERITY_COLORS[entry.severity] : 'none'} />
        ))}
      </Pie>

      {/* Status by severity layer */}
      <Pie
        startAngle={210}
        endAngle={-30}
        data={dataByStatus}
        cx={600}
        cy={600}
        innerRadius={400}
        outerRadius={415}
        dataKey="value"
        cornerRadius={10}
        stroke="none"
      >
        {dataByStatus.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[entry.severity]} />
        ))}
      </Pie>

      <Tooltip content={InsightTooltip} />
    </PieChart>
  );
}
