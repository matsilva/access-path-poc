import { BarChart, Bar, Tooltip, TooltipProps } from 'recharts';
import { barChartData, transformer } from './data';
const data = transformer(barChartData);

interface DataPoint {
  timestamp: number;
  resolvedCount: number;
  createdCountInverted: number;
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, keyof DataPoint>) => {
  if (!active || !payload || !payload.length) return null;

  const date = new Date(payload[0]?.payload.timestamp);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  const resolvedCount = Math.abs(payload[0]?.value ?? 0);
  const createdCount = payload[1]?.value ? Math.abs(payload[1]?.value) : 0;

  // Calculate percentages
  const total = resolvedCount + createdCount;
  const resolvedPercentage = ((resolvedCount / total) * 100).toFixed(1);
  const createdPercentage = ((createdCount / total) * 100).toFixed(1);

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{formattedDate}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
        <div>
          <div>New</div>
          <div style={{ fontWeight: 'bold' }}>
            {createdCount} <span style={{ color: '#666', fontSize: '0.9em' }}>{createdPercentage}%</span>
          </div>
        </div>
        <div>
          <div>Resolved</div>
          <div style={{ fontWeight: 'bold' }}>
            {resolvedCount} <span style={{ color: '#666', fontSize: '0.9em' }}>{resolvedPercentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BarChartContainer() {
  return (
    <>
      <BarChart width={400} height={120} stackOffset="sign" data={data}>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="resolvedCount" fill="#0581D4" radius={[100, 100, 100, 100]} barSize={8} activeBar={false} stackId="stack" />
        <Bar
          dataKey="createdCountInverted"
          fill="#00D7B1"
          radius={[100, 100, 100, 100]}
          barSize={8}
          stackId="stack"
          style={{ marginTop: 5 }}
        />
      </BarChart>
    </>
  );
}
