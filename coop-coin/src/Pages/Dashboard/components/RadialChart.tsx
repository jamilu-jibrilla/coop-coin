import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip } from 'recharts';

interface ChartProps {
  data: Record<string, any>[];
  activeShape?: any;
  activeIndex?: number;
}

const RadialChart: React.FC<ChartProps> = ({ data, activeShape, activeIndex }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart data={data}>
        <RadialBar dataKey="uv" activeShape={activeShape} activeIndex={activeIndex} />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialChart;
