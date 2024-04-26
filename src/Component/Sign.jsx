import React from "react";
import { FaVideo } from "react-icons/fa6";
const Sign = () => {
  return (
    <div className="mt-16 px-4 md:px-0">
     <div className="heading text-center">
        <div className="font-bold text-4xl">
          Convert Any Sign into Speech
        </div>
        <i className="special text-xl font-bold">
          For Normal People Understanding
        </i>
      </div>
      <div className="main flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
        <div className="video w-[40%]  bg-[#202020] px-8 py-6 rounded-xl">
          <video src="static/demo.mp4" autoPlay></video>
        </div>
        <div className="content w-full md:w-2/3">
          <div className="cohead font-bold text-2xl">
            Directly translate the Live Sign Language into audio
          </div>
          
          <div className="flex justify-start mt-6">
            <div className="capbutton rounded-xl px-8 py-4 bg-[#202020] text-white flex justify-center items-center text-lg font-bold">
              <button onClick={
                ()=>{
                  alert('Currently the page sign to speech is not working due to deployment')
                }
              }>
                <div className="flex justify-center items-center gap-1">
                  Capture Sign <FaVideo />
                </div>
              </button>
            </div>
          </div>
          <div className="subcohead mt-4">
            <div className="yousaid">
              <span className="font-bold text-lg">Said:</span>{" "}
              <span className="text-lg text-gray-500 ml-2" id="output"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="review mt-32 bg-black text-white w-full h-[40vh] max-md:h-fit px-5 py-5 flex flex-col md:flex-row justify-between items-center">
        <div className="image">
          <img
            src="static/m1.png"
            className="rounded-full"
            width="250px"
            height="250px"
            alt=""
          />
        </div>
        <div className="review text-lg font-medium mt-5 md:mt-0 md:ml-5">
          "I am Angelin Monisha. I joined DEF's ISL course to learn ISL to
          communicate with Deaf people. Within this short period, I learned a
          lot about deaf people and their cultures and sign language. Now I am
          so confident that{" "}
          <i className="special">I can communicate with deaf community and can help them in finding solutions for their problems.</i>{" "}
          Our instructor Akash sir taught us very well. He never gets tired of
          clarifying our doubts. He made those classes filled with entertainment
          and we totally enjoyed those classes. Finally learning a new language
          opens many door as well as sign language brings together the deaf and
          the hearing. Thank you so much."
        </div>
      </div>
        <div className="mt-5 videobox flex justify-center">
          <video
            src="static/review.mp4"
            width="40%"
            controls
            className="rounded-lg"
            autoPlay
          ></video>
        </div>
      <div className="use mt-32 mx-10">
        <div className="heading flex justify-center text-3xl font-extrabold">
          How to Translate Sign Language
        </div>
        <div className="steps flex flex-col md:flex-row justify-between items-center mt-9 px-8">
          <div className="card ">
            <div className="head text-2xl font-bold flex items-center ">
            <div className="imag flex justify-center items-center">

              <img src="static/icons8-camera-50.png"  width={'60px'} height={'60px'}
              alt="" />
              </div>
             Step 1. <br />Capture Sign Language Gesture
            </div>
            <div className="inf mt-2">
            The Deaf/Mute person should stand in front of the screen where the sign-to-speech system is active.

            </div>
          </div>
          <div className="card">
            <div className="head text-2xl font-bold flex items-center">
            <div className="imag flex justify-center items-center">
            <img src="static/icons8-translation-30.png" alt="" width={'60px'} height={'60px'}/>
</div>
              Step 2. <br />Translate gesture to text 
            </div>
            <div className="inf mt-2">
            Perform sign gestures that you want to communicate. These gestures will be captured by the system and displayed on the screen.

            </div>
          </div>
          <div className="card">
            <div className="head text-2xl font-bold flex items-center">
            <div className="imag flex justify-center items-center">

            <img src="static/icons8-aa-50.png" width={'60px'} height={'60px'} alt="" />
</div>
              Step 3. <br />Display Translated Text
            </div>
            <div className="inf mt-2">
            The system converts these sign gestures into understandable language, allowing normal people to understand the message being conveyed.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
