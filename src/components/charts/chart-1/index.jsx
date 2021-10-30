import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default class Chart1 extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#000000"
              fill="#000000"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
