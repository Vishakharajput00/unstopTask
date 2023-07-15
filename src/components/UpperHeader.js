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
      <div class="laptopIcon">
        <div ><GiSmartphone style={{height:"20px", width:"20px"}}/></div>
      </div>
    </div>
  <div class="showSecondHeader">
  <div class='assess1'>
      <div class="box178">
        <div class="menuIconBox">
            <BiMenuAltLeft class="menuIcon"/>
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
   </div>
  )
}
