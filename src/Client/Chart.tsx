import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan-Mar', moneyIn: 4000, moneyOut: 2400, amt: 2400 },
  { name: 'Apr-Jun', moneyIn: 3000, moneyOut: 1398, amt: 2210 },
  { name: 'Jul-Sep', moneyIn: 2000, moneyOut: 9800, amt: 2290 },
  { name: 'Oct-Dec', moneyIn: 2780, moneyOut: 3908, amt: 2000 },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={345}>
      <ComposedChart data={data} margin={{ top: 25, right: 30, left: 10, bottom: 5 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="top"
          wrapperStyle={{
            top: 0,
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            padding: '7px',
          }}
        />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="moneyIn" barSize={20} fill="#c1121f" />
        <Bar dataKey="moneyOut" barSize={20} fill="#2E54E3" />
        <Line type="monotone" dataKey="moneyIn" stroke="#c1121f" />
        <Line type="monotone" dataKey="moneyOut" stroke="#2E54E3" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
