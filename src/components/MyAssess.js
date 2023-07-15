import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import  "./MyAssess.css"
export default function MyAssess() {
  return (
    <div>
      {/* heading  */}
      <div> <h2>My Assessment</h2></div>

      {/* 3 cards structure*/}
      <div class="cardsMainBox">
        {/* 1st card */}
        <div class="newAssissmentBox">
          <div><AiOutlinePlus></AiOutlinePlus></div>
          <span>New Assessment</span>
          <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
        </div>
        {/* 2nd card */}
        <div  class="cards2Box">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
