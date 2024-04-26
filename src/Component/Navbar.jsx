import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaAngleUp, FaFile } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [translatetoggle, setTranslateToggle] = useState(false);
  const toggleTranslate = () => {
    setTranslateToggle(!translatetoggle);
  };
  return (
    <div className="navbar flex bg-[#221f24] text-white h-full items-start z-10">
      <div className="nav flex mx-4 md:mx-16 my-4 md:my-7 items-center justify-between max-md:items-start max-md:flex-col max-md:mx-6">
        <div className="logo">
          {/* <FaFile size={"1.5em"} /> */}
          <img
            src="/static/logo.jpg"
            alt=""
            width={"50px"}
            className="rounded-full"
          />
        </div>
        <div className="link">
          <ul className="list flex md:mx-5 max-md:flex-col">
            <li className="p-2 text-lg hover:text-[#91cc5d]">
              <NavLink
                to={"/Explore"}
                activeClassName="text-[#91cc5d]"
              >
                Explore
              </NavLink>
            </li>
            <li className="p-2 text-lg hover:text-[#91cc5d]">
              <NavLink
                to={"/Courses"}
                activeClassName="text-[#91cc5d]"
              >
                Courses
              </NavLink>
            </li>
            <li className="p-2 text-lg">
              <div
                className="flex items-center hover:text-[#91cc5d] cursor-pointer relative"
                onClick={toggleTranslate}
              >
                Translate {translatetoggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`togglelist mt-1 md:absolute  text-white text-center bg-[#252525bd] px-2 rounded-lg ${translatetoggle ? '' : 'hidden'}`}>
                <div className="speech py-2 text-lg hover:text-[#91cc5d]">
                  <NavLink
                    to={"/Speech"}
                    activeClassName="text-[#91cc5d]"
                  >
                    Speech to Sign
                  </NavLink>
                </div>
                <div className="sign py-2 text-lg hover:text-[#91cc5d]">
                  <NavLink
                    to={"/Sign"}
                    activeClassName="text-[#91cc5d]"
                  >
                    Sign To Speech
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="p-2 text-lg hover:text-[#91cc5d]">
              <NavLink
                to={"/Dictionary"}
                activeClassName="text-[#91cc5d]"
              >
                Dictionary
              </NavLink>
            </li>
            <li className="p-2 text-lg hover:text-[#91cc5d]">
              <NavLink
                to={"/Contact"}
                activeClassName="text-[#91cc5d]"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
