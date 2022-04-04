import React, { useEffect, useState } from "react";
import LineRechart from "../LineRechart/LineRechart";
import BarRechart from "../BarRechart/BarRechart";
import "./Dashboard.css";
import PieRechart from "../PieRechart/PieRechart";
import AreaRechart from "../AreaRechart/AreaRechart";

const Dashboard = () => {
  const [charts, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="charts">
        <LineRechart charts={charts}></LineRechart>
        <BarRechart charts={charts}></BarRechart>
      </div>
      <div className="charts">
        <PieRechart charts={charts}></PieRechart>
        <AreaRechart charts={charts}></AreaRechart>
      </div>
    </div>
  );
};

export default Dashboard;
