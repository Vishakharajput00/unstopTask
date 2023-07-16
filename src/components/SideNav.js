import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAssessment } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import "./SideNav.css";

export default function SideNav() {
  return (
    <div>
      <div class="column">
        <div class="box">
          <BiSolidDashboard style={{ height: "20px", width: "20px" }} />
          <h4 class="heading">Dashboard</h4>
        </div>
        <div class="box1">
          <MdAssessment style={{ height: "20px", width: "20px" }} />
          <h4 class="heading">Assessment</h4>
        </div>
        <div class="box">
          <MdOutlineLibraryBooks style={{ height: "20px", width: "20px" }} />
          <h4 class="heading">My Library</h4>
        </div>
        <hr class="hr" />

        <div class="box">
          <div>
            {" "}
            <button class="btn">Admin</button>
          </div>
          <GrStatusUnknown
            style={{ height: "20px", width: "20px", paddingTop: "15px" }}
          />
          <h4 class="heading">Round Status</h4>
        </div>
      </div>
    </div>
  );
}
