import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaidIcon from '@mui/icons-material/Paid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Sidebar.css"
export const SidebarData = [
    {
        title:'Dashboard',
        icon:<DashboardIcon/>,
        link:"/home"
    },
    {
        title:'Transactions',
        icon:<PaidIcon/>,
        link:"/home"
    },
    {
        title:'Schedules',
        icon:<EventAvailableIcon/>,
        link:"/home"
    },
    {
        title:'Users',
        icon:<PersonIcon/>,
        link:"/home"
    },
    {
        title:'Settings',
        icon:<SettingsIcon/>,
        link:"/home"
    },
    
];