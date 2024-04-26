import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoIosBookmark } from "react-icons/io";
const Card = (props) => {
  const [bookark, setbookark] = useState(false)
  return (
    <div className="course rounded-lg py-2 bg-[#f0f0f0] px-2 font-['Poppins']">
      <div className="video w-48 h-30 relative max-md:w-full">
        <img src={"static/"+props.name+'.jpg'} height={'40px'} className="" alt="" />
        <div className="bookmark absolute right-0 bottom-1" onClick={()=>{
          setbookark(!bookark)
          
          console.log( document.querySelector('.continue').childNodes)
        }}> {bookark?<IoIosBookmark size={'1.3em'}/>:<CiBookmark size={'1.3em'}/>}</div>
      </div>
      <div className="info px-4 py-2 ">
        <div className="name text-sm font-medium ">{props.name}</div>
        <div className="rate flex justify-between">
          <div className="time">{props.time}</div>
          <div className="rating">{props.rate}🌟</div>
          <div className="start border-white rounded-lg bg-[#91cc5d] px-2   text-black">
           <NavLink to={"/Learn/"+props.name}
           state={props}
           > <button>Start</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
