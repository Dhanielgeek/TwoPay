import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Provision', value: 400 },
  { name: 'Gas', value: 300 },
  { name: 'Light', value: 300 },
  { name: 'Mobile bills', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((index:any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            padding : "3px"
          }}
        /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
