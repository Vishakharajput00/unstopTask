import React, { useState } from 'react';
import "./UpperHeader.css";
import { GiSmartphone } from 'react-icons/gi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BiLaptop } from 'react-icons/bi';
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import { GrStatusUnknown } from "react-icons/gr";


import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";



export default function UpperHeader() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const SidebarData = [
  //   {
  //     title: "Home",
    
  //     icon: <AiOutlineClose />,
  //     cName: "nav-text"
  //   },
  //   {
  //     title: "Reports",
    
  //     icon: <AiOutlineClose />,
  //     cName: "nav-text"
  //   },
  //   {
  //     title: "Products",
     
  //     icon: <AiOutlineClose />,
  //     cName: "nav-text"
  //   },
    
   
  // ];
  return (
   <div>
     <div class='assess'>
      <div class="box178">
        <div class="firstHead">Assessment</div>
        <div class="secondHeading">My Assessments</div>
      </div>
      <div class="laptopIcon">
        <div ><GiSmartphone style={{height:"20px", width:"20px"}}/></div>
      </div>
    </div>
  <div class="showSecondHeader">
  <div class='assess1'>
      <div class="box178">
        <div class="menuIconBox">
       
            <BiMenuAltLeft class="menuIcon" onClick={showSidebar}/>
        </div>
        <div class="firstHead1">Assessment</div>
       
      </div>
      <div class="laptopIcon">
        <div ><BiLaptop style={{height:"20px", width:"20px"}}/></div>
      </div>
    </div>
    <div class="secondBoxAssess">
      <div class="myAssessment">
My Assessment
      </div>
      <div class="unstopAssessment">
       Unstop Assessment 
        </div>
    </div>
  </div>
  <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}  >
            <li className="navbar-toggle">
              <h3 class="navbarHead">Menu</h3>
              <a className="menu-bars">
                <AiOutlineClose />
              </a>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
               
                    {item.icon}
                    <span>{item.title}</span>
               
                </li>
              );
            })}
           
            <li>
           <div class="devideRound">
          <div class="nav-text1">
          <GrStatusUnknown
       
      />
      <span class="heading">Round Status</span>
          </div>
          <div>
          <button class="btn">Admin</button>
          </div>
           </div>
            </li>
          </ul>
        </nav>
   </div>
  )
}
