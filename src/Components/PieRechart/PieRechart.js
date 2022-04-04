import React from "react";
import { Pie, PieChart } from "recharts";

const PieRechart = ({ charts }) => {
  return (
    <div>
      <h3 className="text-center mt-5">Investment VS Revenue</h3>
      <PieChart width={500} height={400}>
        <Pie
          data={charts}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={charts}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieRechart;
