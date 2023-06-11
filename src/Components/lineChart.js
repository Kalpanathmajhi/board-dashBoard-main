import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { red } from "@mui/material/colors";

function LineChart({ chartData }) {
  return <div className="Line"><Line data={chartData} /></div>
  
}

export default LineChart;