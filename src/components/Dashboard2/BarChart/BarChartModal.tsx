import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";
import { barChartData } from "../../../constant";

function BarChartModal() {
  return (
    <div className="__parentStyle">
      <p className="__pElement">visitor statistics</p>

      <div className="py-10 flex justify-center">
        <ResponsiveContainer width={"95%"} height={200}>
          <BarChart data={barChartData}>
            <Bar dataKey="range" fill="#1E87F0" />
            <YAxis />
            <XAxis dataKey="month" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartModal;
