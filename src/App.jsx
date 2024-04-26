import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

import { IoIosArrowDropupCircle } from "react-icons/io";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    if(!showSidebar){
      document.querySelector('.toggle').classList.add('ml-52')}
      else{
      document.querySelector('.toggle').classList.remove('ml-52')
      }
  };

  return (
    <div className="relative " id="star" >
      {/* Navbar for computers */}
      <div className="hidden md:block">
        <Navbar isMobile={false} />
      </div>
      {/* Mobile Navbar Toggle */}
      <div className="toggle md:hidden fixed z-50 bg-[#221f24] text-white top-0 left-0 w-full h-9 flex items-center justify-start ">
        <button className="togglebtn p-3" onClick={toggleSidebar}>
        {showSidebar? <RiMenuFoldLine size={"1.3em"} color="gray" />:<RiMenuUnfoldLine size={"1.3em"} color="gray" />
          } 
        </button>
      </div>

      {/* Sidebar Navbar for mobile */}
      {showSidebar && (
        <div className="md:hidden fixed z-50 bg-[#221f24] text-white top-0 left-0 h-full w-52 md:w-full md:h-auto md:relative md:flex-shrink-0 md:shadow-lg md:overflow-y-auto">
          <Navbar isMobile={true} />
        </div>
      )}

      {/* Main Content */}
      <div className="" onClick={()=>{
        if(showSidebar){
        setShowSidebar(false)
        document.querySelector('.toggle').classList.remove('ml-52')}
      }}>
        <Outlet/>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
      <div className="top sticky bottom-4 p-6 bg-[#2b292935] flex justify-center items-center rounded-full w-12 h-12 hover:bg-[#272626a6]  right-10">
        <a href="#star">
      <IoIosArrowDropupCircle  size={'2.5em'}/></a>
      </div>
    </div>
  );
}

export default App;

