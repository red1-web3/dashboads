// import { Tooltip } from "chart.js";
import React from "react";
import {
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  YAxis,
  Line,
  LineChart,
  Label,
} from "recharts";
import { Char1data as data } from "../../../constant";

function LineCharts() {
  return (
    <ResponsiveContainer width="97%" height={220}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="last"
          stroke="#6366f1"
          activeDot={{ r: 4 }}
          dot={{ r: 3, fillOpacity: 0 }}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="prior"
          stroke="#9333ea"
          activeDot={{ r: 4 }}
          dot={{ r: 3, fillOpacity: 0 }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts;
