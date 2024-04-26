import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Singleelm = (props) => {
  return (
    <div
      className="elment  flex px-6 py-2 justify-between items-center cursor-pointer"
      onClick={() => {
        console.log(document.querySelector(".content video"));
        document.querySelector(".anim").src = props.src1 + props.val + ".mp4";
        document.querySelector(".memory").src = props.src2 + props.val + ".mp4";
        document.querySelector(".crname").innerText = "Learn: " + props.val;
      }}
    >
      <div className="merge flex gap-3 items-center">
        <div className="tick">
          {" "}
          <IoCheckmarkDoneSharp />
        </div>
        <div className="one">
          <div className="int font-medium text-base capitalize cursor-pointer">
            {props.val}
          </div>
          <div className="module text-sm">4 minute 5 sec</div>
        </div>
      </div>
    </div>
  );
};

export default Singleelm;
