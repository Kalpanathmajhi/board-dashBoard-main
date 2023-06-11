import { useState } from "react";
import LineChart from "./lineChart";
import PieChart from "./pieChart";
import { UserData } from "./Data";
import "./FinalChart.css";
import MeetingCard from "./MeetingCard"

function Finalchart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className="App"> 
        <LineChart chartData={userData} />
        <div className="final-container">
        <PieChart chartData={userData} />
        <MeetingCard/>
        </div>
    </div>
  )
}

export default Finalchart
