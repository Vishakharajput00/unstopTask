import React from 'react';
import "./UpperHeader.css";
import { GiSmartphone } from 'react-icons/gi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BiLaptop } from 'react-icons/bi';



export default function UpperHeader() {
  return (
   <div>
     <div class='assess'>
      <div class="box178">
        <div class="firstHead">Assessment</div>
        <div class="secondHeading">My Assessments</div>
      </div>
      <div>
        <div class="phoneIcon"><GiSmartphone /></div>
      </div>
    </div>
    <div class='assess1'>
      <div class="box178">
        <div>
            <BiMenuAltLeft/>
        </div>
        <div class="firstHead">Assessment</div>
       
      </div>
      <div>
        <div class="phoneIcon"><BiLaptop /></div>
      </div>
    </div>
   </div>
  )
}
