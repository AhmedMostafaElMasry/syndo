import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
];

export default class Chart2 extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy";

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Bar dataKey="pv" barSize={20} fill="#000000" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
