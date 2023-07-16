import React from "react";

import * as FaIcons from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";

import { MdOutlineLibraryBooks } from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
  
    icon: <BiSolidDashboard />,
    cName: "nav-text"
  },
  {
    title: "Assessment",
  
    icon: <MdOutlineLibraryBooks />,
    cName: "nav-text"
  },
  {
    title: "My library",
   
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  
 
];
