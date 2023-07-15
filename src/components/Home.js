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
    <div>
      <div class="row">
     <div class='column'>
      <SideNav/>
     </div>

        <div>
          {/* <div class="assess">
            <div class='upperAssess'>
<span class="firstHead">Assessment</span>
<span>My Assessments</span>
            </div>
            <div>hello</div>
          </div> */}
          <UpperHeader/>
          <AssessOverview/>
          <MyAssess/>
        </div>
      </div>
    </div>

   
  );
}
