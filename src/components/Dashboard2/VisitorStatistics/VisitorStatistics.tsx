import React from "react";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

function VisitorStatistics() {
  return (
    <div className="__parentStyle w-full">
      <p className="__pElement">visitor statistics</p>

      <div className="py-10 h-[350px] md:h-[400px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <ScatterChart
            margin={{
              top: 0,
              right: 20,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid />
            <YAxis type="number" dataKey="y" name="Last Month" />
            <ZAxis type="number" range={[100]} />
            <XAxis type="number" dataKey="x" name="Current Month" />
            <Scatter
              name="Last Month"
              data={data01}
              fill="#8884d8"
              line
              shape="cross"
            />
            <Scatter
              name="Current Month"
              data={data02}
              fill="#82ca9d"
              line
              shape="diamond"
            />
            <Tooltip />
            <Legend />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VisitorStatistics;
