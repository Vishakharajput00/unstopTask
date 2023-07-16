import React from "react";
import "./AssessOverview.css";
import { ImMenu2 } from "react-icons/im";
import { IoIosPerson } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import { IoDocumentAttachOutline } from "react-icons/io5";

export default function AssessOverview() {
  return (
    <div>
      <h2 >Assessment Overview</h2>
      <div class="main">
        <div class="firstBox">
          <h2>Total Assessment</h2>
          <div class="flex">
            <div class="firstBoxIcon">
              <ImMenu2 class="icon" />
            </div>
            <div class="spanHead">34</div>
          </div>
        </div>
        <div class="firstBox">
          <h2>Candidates</h2>
          <div class="candidteflex">
            <div class="firstBoxIcon">
              <IoIosPerson class="icon" />
            </div>
            <div class="spanHead1">
              11,145
              <span>+89</span>
              <div class="totalCan">Total Candidate</div>
            </div>
            <div class="line"></div>

            <div class="spanHead1">
              114
              <span>+89</span>
              <div class="totalCan">Who Attempted</div>
            </div>
          </div>
        </div>
        <div class="firstBox">
          <h2>Candidates Source</h2>
          <div class="candidteflex">
            <div class="firstBoxIcon">
              <BsGlobe class="icon" />
            </div>
            <div class="spanHead1">
              11,000
              <span>+89</span>
              <div class="totalCan">E-mail</div>
            </div>
            <div class="line"></div>

            <div class="spanHead1">
              145
              <span>+89</span>
              <div class="totalCan">Social Share</div>
            </div>
            <div class="line"></div>

            <div class="spanHead1">
              145
              <span>+89</span>
              <div class="totalCan">Unique Link</div>
            </div>
          </div>
        </div>
        <div class="firstBox">
          <h2>Total Purpose</h2>
          <div class="flex">
            <div class="firstBoxIcon">
              <IoDocumentAttachOutline class="icon" />
            </div>
            <div class="spanHead">11</div>
          </div>
        </div>
      </div>
    </div>
  );
}
