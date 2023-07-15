import React from 'react';
import "./UpperHeader.css";
import { GiSmartphone } from 'react-icons/gi';

export default function UpperHeader() {
  return (
    <div class='assess'>
      <div class="box178">
        <div class="firstHead">Assessment</div>
        <div class="secondHeading">My Assessments</div>
      </div>
      <div>
        <div class="phoneIcon"><GiSmartphone /></div>
      </div>
    </div>
  )
}
