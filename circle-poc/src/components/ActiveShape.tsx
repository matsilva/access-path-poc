import { Sector } from 'recharts';
import { ActiveShapeProps } from '../types/chart';
import { getStatusFill } from '../constants/colors';

export const ActiveShape = (props: ActiveShapeProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload } = props;
  const fill = getStatusFill(payload);

  return (
    <g>
      <Sector
        opacity={0.2}
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};
