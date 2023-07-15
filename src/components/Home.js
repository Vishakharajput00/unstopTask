import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssessment } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import "./Home.css";
import SideNav from "./SideNav";
import UpperHeader from "./UpperHeader";
import AssessOverview from "./AssessOverview";
import MyAssess from "./MyAssess";

export default function Home() {
  return (
    <div >
      <div class="row">
     <div class='column'>
      <SideNav/>
     </div>

        <div class ="row2">
          <UpperHeader/>
          <AssessOverview/>
          <MyAssess/>
        </div>
      </div>
    </div>

   
  );
}
