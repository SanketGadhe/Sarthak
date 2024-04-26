import React from "react";
import { NavLink } from "react-router-dom";

const Mainview = () => {
  return (
    <>
      <div className="flex justify-between mx-16 mt-14 max-md:block">
        <div className="content w-[60%] max-md:w-[100%]">
          <p className="head font-bold text-5xl">Sarthak:</p>
          <p className="head font-bold text-3xl">Empowering through education & 
connecting through Translation </p>
          <p className="mt-4 ">
          Sarthak provides an e-learning and sign language translation platform for both Deaf/Mute
 and normal individuals. This platform facilitates seamless interaction between these two
 communities, allowing them to learn sign language without hesitation. Our goal is to bridge
 the gap between normal people and Deaf/Mute individuals. </p>
          <div className="explore flex mt-7 justify-between w-[100%] max-md:justify-center">
           <NavLink  to={"/Courses"}
           >
            <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white max-md:w-fit ">
              Explore Now
            </button></NavLink>
          </div>
        </div>
        <div className="flex justify-center mt-1 image text-xl w-[60%] max-md:w-fit">
          <img src="static/p2.png" alt="" className="text-xl h-[75vh] max-md:h-fit" />
        </div>
      </div>
      <div className="self flex mx-16 my-10 justify-between w-[80vw] max-md:block ">
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2 text-lg'>Testimonal</p>
          <p className="text-3xl font-bold">Rating 4.5🌟</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2  text-lg'>FAQS</p>
          <p className="text-3xl font-bold">Resources</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2  text-lg'>Offer</p>
          <p className="text-3xl font-bold">Free</p>
        </div>
        <div className="selfcards px-3 py-2 text-center">
          <p className='mb-2 text-lg'>User Satisfaction Rate</p>
          <p className="text-3xl font-bold">93.2%</p>
        </div>
      </div>
    </>
  );
};

export default Mainview;
