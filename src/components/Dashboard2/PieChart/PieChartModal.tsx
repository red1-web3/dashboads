import React from "react";
import {
  PieChart,
  ResponsiveContainer,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Post", value: 400 },
  { name: "Portfolio", value: 300 },
  { name: "Comments", value: 300 },
  { name: "Messages", value: 200 },
];
const COLORS = ["#1e87f080", "#1e40af86", "#3b83f693", "#1d4fd880"];

function PieChartModal() {
  return (
    <div className="__parentStyle w-full">
      <p className="__pElement">posts statistics</p>
      <div className="py-10">
        <ResponsiveContainer height={300}>
          <PieChart>
            <Pie dataKey="value" data={data} label>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartModal;
