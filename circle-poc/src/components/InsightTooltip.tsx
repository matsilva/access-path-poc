import { TooltipProps } from 'recharts';
import { InsightDataPoint } from '../types/chart';
import { SEVERITY_TO_SHORTHAND } from '../constants/severity';
import { getStatusFill } from '../constants/colors';

interface MetricDisplayProps {
  label: string;
  value: number;
  percentage: string;
}

const MetricDisplay = ({ label, value, percentage }: MetricDisplayProps) => (
  <div>
    <div style={{ fontSize: '10px', textAlign: 'left' }}>{label}</div>
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
      <strong>{value}</strong>
      <span style={{ color: '#666', fontSize: '10px', marginLeft: '4px' }}>{percentage}</span>
    </div>
  </div>
);

export const InsightTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload as InsightDataPoint;

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
          borderRadius: '4px',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: getStatusFill(data),
            marginRight: '8px',
          }}
        >
          {SEVERITY_TO_SHORTHAND[data.severity as keyof typeof SEVERITY_TO_SHORTHAND]}
        </span>
        <span style={{ textTransform: 'capitalize' }}>{data.severity}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <MetricDisplay label="Open" value={data.open || 0} percentage={data.openPercentage || '0%'} />
        <MetricDisplay label="Pending" value={data.pending || 0} percentage={data.pendingPercentage || '0%'} />
        <MetricDisplay label="Resolved" value={data.resolved || 0} percentage={data.resolvedPercentage || '0%'} />
        <MetricDisplay label="Exception" value={data.exception || 0} percentage={data.exceptionPercentage || '0%'} />
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
};
