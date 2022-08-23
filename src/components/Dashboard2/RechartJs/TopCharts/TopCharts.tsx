import React, { useRef } from "react";
import { Line, ResponsiveContainer, LineChart } from "recharts";
import { topChartsData, TopChartsProps } from "../../../../constant";

function TopCharts({ day, number }: TopChartsProps) {
  const animationRef = useRef(null);

  return (
    <div className="relative topChart __topCharts -translate-y-10">
      <span className="absolute top-4 -left-4 bg-white/50 z-10 rounded-xl w-full h-full py-4 box-shadow-dash2"></span>
      <div className="relative z-30 leading-3 -space-y-4 bg-white py-4 rounded-xl box-shadow-dash2 duration-200">
        <strong className="text-4xl text-black/60 px-6 numberCount">
          {number}
        </strong>
        <ResponsiveContainer width={"100%"} height={100}>
          <LineChart data={topChartsData}>
            <Line
              dataKey="line1"
              stroke="#c7c7c7"
              dot={{ r: 0 }}
              type="monotone"
            />
            <Line
              dataKey="line2"
              stroke="#c7c7c7"
              dot={{ r: 0 }}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>

        <p className="flex justify-end px-6 font-medium text-primary2 text-lg">
          {day}
        </p>
      </div>
    </div>
  );
}

export default TopCharts;
