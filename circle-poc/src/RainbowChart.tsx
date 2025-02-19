import { useCallback, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { insightData, transformInsightData, transformInsightDataByStatus } from './data';
import { SEVERITY_COLORS, getStatusFill, isSeverity } from './constants/colors';
import { ActiveShape } from './components/ActiveShape';
import { InsightDataPoint } from './types/chart';

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
      >
        {dataByStatus.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[entry.severity]} />
        ))}
      </Pie>

      <Tooltip
        content={({ active, payload }) => {
          if (!active || !payload || !payload.length) return null;

          const data = payload[0].payload;
          return (
            <div
              style={{
                backgroundColor: 'white',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#DC3545',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  display: 'inline-block',
                }}
              >
                {data.severity}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <div>Open</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{data.open || 56}</strong>
                    <span style={{ color: '#666' }}>{data.openPercentage || '20.2%'}</span>
                  </div>
                </div>

                <div>
                  <div>Pending</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{data.pending || 12}</strong>
                    <span style={{ color: '#666' }}>{data.pendingPercentage || '5.2%'}</span>
                  </div>
                </div>

                <div>
                  <div>Resolved</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{data.resolved || 39}</strong>
                    <span style={{ color: '#666' }}>{data.resolvedPercentage || '75%'}</span>
                  </div>
                </div>

                <div>
                  <div>Exception</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{data.exception || 2}</strong>
                    <span style={{ color: '#666' }}>{data.exceptionPercentage || '0.5%'}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid #eee',
                }}
              >
                <div>Avg Resolution Time</div>
                <strong>12 DAYS</strong>
              </div>
            </div>
          );
        }}
      />
    </PieChart>
  );
}
