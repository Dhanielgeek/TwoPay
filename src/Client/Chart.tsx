import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "2015",
      cl: 6000,
      c2: 7000,
      c3: 4200,
    },
    {
      name: "2016",
      cl: 2000,
      c2: 8600,
      c3: 7210,
    },
    {
      name: "2017",
      cl: 1400,
      c2: 3000,
      c3: 4290,
    },
    {
      name: "2018",
      cl: 3120,
      c2: 8400,
      c3: 6000,
    },
    {
      name: "2019",
      cl: 2200,
      c2: 2340,
      c3: 2210,
    },
  ];
  return (
    <div className="w-[100%] border  bg-black  border-[#D3CBFB] rounded-lg flex flex-col h-[100%]">
      <div className="w-[100%] flex justify-between">
        <h3 className="text-[14px] font-[600] max-md:text-[10px]">Claims Over the Years</h3>

        <div className="items-center flex mt-5">
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95]"></div>
            <p className="text-[#EA8F95] max-md:text-[10px] text-[14px] font-[500] ml-[7px]">
              Approved
            </p>
          </div>
          <div className="flex items-center ml-[17px]">
            <div className="w-[10px]  h-[10px] rounded-full bg-[#5041BC]"></div>
            <p className="text-[#5041BC]  max-md:text-[10px] text-[14px] font-[500] ml-[7px]">
              Submitted
            </p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          className=""
          data={data}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="20"
                stdDeviation="25"
                floodColor="rgba(69, 51, 201, 0.3)"
                floodOpacity="0.8"
              />
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="10"
                floodColor="rgba(69, 51, 201, 0.5)"
                floodOpacity="0.6"
              />
            </filter>
          </defs>
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#CED6DE", strokeWidth: 2 }}
            className="text-[#5041BC] text-[11px]"
          />
          <YAxis
            className="text-[#5041BC] text-[11px]"
            axisLine={{ stroke: "#CED6DE", strokeWidth: 2 }}
            tickFormatter={(tick) => Math.round(tick).toString().slice(0, 2)}
          />
          <Tooltip
            contentStyle={{
              background:
                "linear-gradient(229.42deg, #3D29D0 26.93%, #C25FFF 98.11%)",
              border: "1px solid #CED6DE",
              borderRadius: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
            labelStyle={{
              color: "#333",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "12px",
            }}
            cursor={{ fill: "#000000" }}
            formatter={(value, name, props) => {
              if (name === "c2") {
                return `${props.payload.name}: ${value}`;
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="c2"
            stroke="#E26169"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="c3"
            stroke="#5041BC"
            strokeWidth={3}
            dot={false}
            filter="url(#shadow)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;