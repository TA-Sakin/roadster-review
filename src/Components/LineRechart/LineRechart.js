import React from "react";
import { YAxis } from "recharts";
import { XAxis } from "recharts";
import { LineChart, Line, Tooltip } from "recharts";
const LineRechart = ({ charts }) => {
  return (
    <div>
      <h3 className="text-center my-5">Month Wise Sell</h3>
      <LineChart width={500} height={400} data={charts}>
        <Line type="monotone" stroke="#8884d8" dataKey={"sell"} />
        <XAxis dataKey="month" />
        <Tooltip></Tooltip>
        <YAxis />
      </LineChart>
      <p className="text-center">-o- sell</p>
    </div>
  );
};

export default LineRechart;
