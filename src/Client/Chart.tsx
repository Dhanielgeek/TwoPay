
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'moneyIn',
    color: '#c1121f',
    data: [
      { x: 'Jan-Mar', y: 4000 },
      { x: 'Apr-Jun', y: 3000 },
      { x: 'Jul-Sep', y: 2000 },
      { x: 'Oct-Dec', y: 2780 },
    ],
  },
  {
    id: 'moneyOut',
    color: '#2E54E3',
    data: [
      { x: 'Jan-Mar', y: 2400 },
      { x: 'Apr-Jun', y: 1398 },
      { x: 'Jul-Sep', y: 9800 },
      { x: 'Oct-Dec', y: 3908 },
    ],
  },
  {
    id: 'amt',
    color: '#8884d8',
    data: [
      { x: 'Jan-Mar', y: 2400 },
      { x: 'Apr-Jun', y: 2210 },
      { x: 'Jul-Sep', y: 2290 },
      { x: 'Oct-Dec', y: 2000 },
    ],
  },
];

const Chart = () => (
  <div style={{ height: 345 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 25, right: 30, bottom: 60, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Period',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Amount',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={true}
      lineWidth={2}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -20,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default Chart;
