import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./MyAssess.css";
import { PiBagFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiTwotoneFilter } from "react-icons/ai";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import AssessOverview from "./AssessOverview";


export default function MyAssess() {
  const [show,setShow]= useState(1);
  console.log(show,'shiw--===')

  

const handleChange=()=>{
setShow(show+1)
  }
  const BoxObject = [
    {
      heading: "Math Assessment",
      content: "Job",
      duration: "00",
      question: "00",
    },
    {
      heading: "Math Assessment",
      content: "Job",
      duration: "00",
      question: "00",
    },
    {
      heading: "Math Assessment",
      content: "Job",
      duration: "00",
      question: "00",
    },
    {
      heading: "Math Assessment",
      content: "Job",
      duration: "00",
      question: "00",
    },
    {
      heading: "Math Assessment",
      content: "Job",
      duration: "00",
      question: "00",
    },
  ];
  return (
    <div>
      {show % 2 === 0 ? <div><AssessOverview/></div> : null}
     <div class="assessemntOverview-hide-show"> <AssessOverview/></div> 
      <div>
    <div class='myassessment'>
    <div>
        <h2>My Assessment</h2>
      </div>
     <div class="hide-show">
     <div class="iconsFlex">
        <div class="iconFlex-icon">  <AiOutlineSearch/></div>
        <div class="iconFlex-icon"> <AiTwotoneFilter/></div>
        <div class="iconFlex-icon"><MdOutlineSignalCellularAlt onClick={handleChange}/></div>
     
      </div>
     </div>
    </div>

      <div class="cardsMainBox">
        <div class="newAssissmentBox">
          <div class="Plusicon">
            <AiOutlinePlus
              style={{ color: "#0073E6", height: "23.33px", width: "23.33px" }}
            />
          </div>
          <span>New Assessment</span>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        {BoxObject &&
          BoxObject.map((obj) => {
            return (
              <div class="cards2Box">
                <div class="secondCard">
                  <div>
                    <div class="secondBoxIcon">
                      <PiBagFill class="secondicon" />
                    </div>
                    <div class="math">{obj.heading}</div>
                    <div>
                      <span style={{ color: "#1C4980", fontWeight: "500" }}>
                        {obj.content}
                      </span>{" "}
                      |{" "}
                      <span style={{ color: "#8DA4BF" }}>
                        <SlCalender class="calicon" /> 20 apr 2023
                      </span>
                    </div>
                  </div>
                  <div>
                    <CiMenuKebab />
                  </div>
                </div>

                <div class="duration">
                  <div style={{ display: "flex" }}>
                    <span class="question">
                      {obj.duration} <br />
                      Duration{" "}
                    </span>
                    <span class="question" style={{ marginLeft: "10px" }}>
                      {obj.question} <br /> Question
                    </span>
                  </div>

                  <div style={{ display: "flex" }}>
                    <span>
                      <button class="shareBtn">
                        <AiOutlineLink /> Share
                      </button>
                    </span>
                    <span class="lp">LP</span>
                    <span class="lp1">LP</span>
                    <span class="lp2">LP</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}
