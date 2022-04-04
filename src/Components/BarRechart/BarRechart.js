import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarRechart = ({ charts }) => {
  return (
    <div>
      <h3 className="text-center mb-5">Investment vs Revenue</h3>
      <BarChart width={500} height={400} data={charts}>
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#67f71f" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <Tooltip></Tooltip>
        <YAxis />
      </BarChart>
    </div>
  );
};

export default BarRechart;
