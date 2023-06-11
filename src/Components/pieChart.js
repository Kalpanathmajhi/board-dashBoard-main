import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./MeetingCard.css"

function Piechart({ chartData }) {
  
  return <div className="Pie"><Pie data={chartData} />
         </div>
}

export default Piechart;