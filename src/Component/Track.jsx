import React from "react";
import { FaBookmark } from "react-icons/fa6";
import Singleelm from "./Singleelm";

const Track = (props) => {
  return (
    <div className="flex bg-[#f0f0f0] px-4 py-2 rounded-lg">
      <div className="img">
        <img src={props.src} className=" w-40 h-24" alt="" />
      </div>
      <div className="inform pl-3">
        <div className="info flex">
          <div className="content font-bold font-['Poppins'] text-xl mt-2">
           {props.name}
            <div className="subhead font-semibold text-xs">
              Sign Language Learner
            </div>
          </div>
          <div className="icons ml-2">
            {" "}
            <FaBookmark />
          </div>
        </div>
        <div className="line float-end">
          <hr className="border-[1px] rounded-2xl w-24" />
        </div>
        <div className="track mt-4">Progress: 69%</div>
      </div>
    </div>
  );
};

export default Track;
