import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import axios from "axios";
const VideoPlayer = ({ videoList }) => {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const totalVideos = videoList.length;
  const [playedVideosCount, setPlayedVideosCount] = useState(0);

  useEffect(() => {
    const playNextVideo = () => {
      if (playedVideosCount < totalVideos - 1) {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % totalVideos);
        setPlayedVideosCount((count) => count + 1);
      } else {
        // Pause at the last video
        videoRef.current.pause();
      }
    };

    const video = videoRef.current;

    video.addEventListener("ended", playNextVideo);

    return () => {
      video.removeEventListener("ended", playNextVideo);
    };
  }, [totalVideos, playedVideosCount]);

  useEffect(() => {
    // Load the initial video
    if (totalVideos > 0) {
      videoRef.current.src = "static/anima/" + videoList[currentVideoIndex];
      videoRef.current.play();
    }
  }, [currentVideoIndex, videoList, totalVideos]);

  return (
    <video ref={videoRef} controls width={"300px"} height={"100%"} src="static/Anima/hello.mp4" autoPlay muted>
      Your browser does not support the video tag.
    </video>
  );
};
const Speech = () => {
  const [data, setData] = useState({
    you_said: "",
    isl_framed: "",
    video_list: [],
  });
   
  const fetchdata = () => {
    const startButton = document.getElementById('start');
    const outputDiv = document.getElementById('output');
    let recognition = null;
    
        startButton.disabled = true;
        startButton.textContent = 'Listening...';
        recognition = new window.webkitSpeechRecognition(); // For Chrome
        recognition.continuous = true;
        recognition.interimResults = true;
        let timeout;
        recognition.onstart = () => {
            console.log('Speech recognition started');
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            outputDiv.innerText = 'Error occurred. Please try again.';
        };

         recognition.onend = () => {
             console.log(document.querySelector('#output').innerText)
            console.log('Speech recognition ended');
            startButton.textContent = 'Speak';
            axios
            .get("https://sanketgadhe366.pythonanywhere.com/islframing/"+outputDiv.innerText)
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
            startButton.disabled = false;
            startButton.textContent = 'Speak';
           
         };
        recognition.onresult = (event) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                  finalTranscript += event.results[i][0].transcript;
              } else {
                  interimTranscript += event.results[i][0].transcript;
              }
          }
            outputDiv.innerText = finalTranscript;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                recognition.stop(); // Stop recognition after a short delay
            }, 1000);
        };

        if (recognition.running) {
          recognition.stop();
         
      } else {
          recognition.start();
          startButton.textContent = 'Listening...';
      }
    

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (recognition) {
                recognition.stop();
                startButton.disabled = false;
                startButton.textContent = 'Speak';
                axios
                .get("https://sanketgadhe366.pythonanywhere.com/islframing/"+outputDiv.innerText)
                .then((response) => {
                  setData(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
        }
    });
   
  };
  let videoList = data.video_list;
  useEffect(() => {
    console.log("Data", data);
  }, [data]);
  return (
    <div className="mt-16 px-4 md:px-0">
      {/* Heading */}
      <div className="heading text-center">
        <div className="font-bold text-4xl">
          Convert Any Speech into Animated Sign
        </div>
        <i className="special text-xl font-bold">
          For Deaf & Mute People Understanding
        </i>
      </div>

      {/* Main Content */}
      <div className="main flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
        {/* Video Player */}
        <div className="video bg-[#202020] flex px-8 py-6 rounded-xl md:w-1/3 md:h-fit justify-center">
          <VideoPlayer videoList={videoList} />
        </div>

        {/* Speech Recognition */}
        <div className="content w-full md:w-2/3">
          <div className="cohead font-bold text-2xl">
            Directly translate the audio into Animated Sign Language 
          </div>
          <div className="subcohead mt-4">
            <div className="yousaid">
              <span className="font-bold text-lg">You Said:</span>{" "}
              <span className="text-lg text-gray-500 ml-2" id="output"></span>
            </div>
            <div className="yousaid mt-1">
              <span className="font-bold text-lg">ISL Framed:</span>{" "}
              <span className="text-gray-500 text-lg">{data.isl_framed}</span>
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <div className="capbutton rounded-xl px-8 py-4 bg-[#202020] text-white flex justify-center items-center text-lg font-bold">
              <button id="start"    onClick={() => {
                  var audio = document.getElementById('myAudio');
                  audio.play();   
                  fetchdata();
                }}>
                <div className="flex items-center gap-1">
                  Speak <FaMicrophone />
                </div>
              </button>
            </div>
          </div>
          <div className="gif mt-6">
            <audio id="myAudio" src="static/speak.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <video src="static/giphy.gif"></video>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="review mt-32 max-md:-mt-32 bg-black text-white w-full h-[40vh] max-md:h-fit px-5 py-5 flex flex-col md:flex-row justify-between items-center">
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

      {/* How to Translate Sign Language */}
        <div className="mt-5 videobox flex justify-center">
          <video
            src="static/review.mp4"
            width="40%"
            controls
            className="rounded-lg"
            autoPlay
          ></video>
        </div>
      <div className="use mt-32">
        <div className="heading text-center font-bold text-3xl">
          How to Translate Sign Language
        </div>
        <div className="steps flex flex-col md:flex-row justify-between items-center mt-9 px-8">
          <div className="card mb-5 md:mb-0">
            <div className="head text-2xl font-bold flex items-center">
              <img src="static/icons8-mic-50.png" alt="" width="30px" height="30px" className="mr-2" />
              Step 1. Capture Spoken Words
            </div>
            <div className="inf mt-2">
              The normal person should speak near the system, articulating the
              message they want to communicate in spoken language.
            </div>
          </div>
          <div className="card mb-5 md:mb-0">
            <div className="head text-2xl font-bold flex items-center">
              <img src="static/icons8-translation-30.png" alt="" width="30px" height="30px" className="mr-2" />
              Step 2. Translate Word To Sign Language
            </div>
            <div className="inf mt-2">
              The system translates the spoken words into text format, capturing
              the message accurately.
            </div>
          </div>
          <div className="card ">
            <div className="head text-2xl font-bold flex items-center">
              <img src="static/icons8-sign-language-50.png" alt="" width="30px" height="30px" className="mr-2" />
              Step 3. Display Sign Language Gesture
            </div>
            <div className="inf mt-2">
              The text is processed and converted into animated sign gestures,
              which are displayed on the screen for the Deaf person to see and
              analyze the communicated message.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
