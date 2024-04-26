import React from "react";
import { FaSignLanguage } from "react-icons/fa";
const Iconscard = (props) => {
  return (
    <div className= "rounded-lg w-60 px-3 py-1 bg-[#f0f0f0] justify-center max-md:w-full">
     <div className="image flex justify-center">
      {
        <img src={'static/Icons/'+props.src+'.png'} alt="" width={'70px'} height={'50px'}/>
      }
     </div>
      <p className="name text-sm font-medium mt-1 text-center">{props.name}</p>
    </div>
  );
};

export default Iconscard;
