
import React from "react";
import '../App.css';
import { SidebarData } from "./SidebarData";

function Sidebar(sidebar) {
    return<div className={sidebar?"sidebar sidebar--open":"sidebar"}>
        <h1 className="heading">Board.</h1>
        <ul className="SidebarList">
        {SidebarData.map((val, key) => {
        return (
            // eslint-disable-next-line eqeqeq
            
            <li key={key} className="row" id={window.location.pathname == val.link ? "active" : "" } onClick={()=>{window.location.pathname = val.link}}>
                {" "}
                <div id="icon">{val.icon}</div>{""}
                <div id="title">{val.title}</div>
                </li>
        )
    })}
    </ul>
    <div className="foot">
        <h4>Help</h4>
        <h4>Contact us</h4>
        </div>
    </div>
}
 export default Sidebar;
    