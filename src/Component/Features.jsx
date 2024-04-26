import React from "react";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div className="features bg-[#f0f0f0] pt-[30vh]">
      <div className="f1 flex flex-col-reverse md:flex-row justify-between items-center max-md:block">
        <div className="image w-[40%] mx-16 max-md:w-[100%] flex justify-center max-md:mx-0">
          <img src="static/sm1.png" alt="" />
        </div>
        <div className="content w-[45%] mr-16 max-md:w-[100%] max-md:m-6">
          <p className="head font-bold text-4xl text-left">Sarthak:</p>
          <p className="head font-bold text-4xl text-left">
            E-Learning Platform
          </p>
          <p className="mt-4 w-[90%] text-left">
            Discovering the heart of communication at Sarthak's e-learning
            platform. Our courses are crafted with care for both Deaf/Mute and
            normal individuals, ensuring anyone can learn sign language from
            beginner to advanced levels. Experience the power of consistent
            professional sign language usage, connecting hearts and voices
            everywhere.
          </p>
          <div className="btn flex max-md:justify-center">
            <NavLink to={"/courses"}>
              <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white mt-9">
                Start Learning
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="f2 flex items-center justify-center mt-[25vh]">
        <div className="wrapi text-center w-[70%] max-md:w-[100%]">
          <div className="text-5xl font-extrabold leading-[70px] tracking-normal">
            Translation Platform
          </div>
          <div className="sub flex justify-center mt-4">
            <div className="w-[80%] text-xl font-semibold leading-[40px] tracking-normal">
              At Sarthak, our Translation Platform is a bridge of understanding,
              divided into Sign-to-Speech and Speech-to-Sign. The first captures
              sign gestures into human-readable language, while the second
              transforms spoken words into animated sign gestures.
            </div>
          </div>
        </div>
      </div>
      <div className="f3 flex flex-col-reverse md:flex-row mt-[40vh] pb-16 justify-between items-center max-md:block">
        <div className="image w-[30%] mx-16 max-md:w-[80%]">
          <img src="static/p5.jpg" alt="" />
        </div>
        <div className="content w-[45%] mr-16 max-md:w-[100%] max-md:m-12">
          <p className="head font-bold text-4xl text-left">
            Sign Language Translation
          </p>
          <p className="mt-4 w-[80%] text-left">
            Sign to Speech module converts sign language into human
            understandable language so that they people can also interact with
            us without any hesitation. The speech to sign module converts our
            normal speech into animated sign gestures, so that by looking at
            that gestures they can analyze our emotions.
          </p>
          <div className="btn flex max-md:justify-center">
            <NavLink to={"/speech"}>
              <button className="px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white mt-9">
                Try Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
