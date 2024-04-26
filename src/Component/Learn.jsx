import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Singleelm from "./Singleelm";
import { useLocation } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Learn = () => {
  const location = useLocation();
  const cordata = location.state;
  let { course } = useParams();
  let courses = {
    Alphabet: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    Short_Words: [
      "advise",
      "all",
      "always",
      "arm",
      "around",
      "baby",
      "back",
      "bat",
      "bear",
      "before",
      "blind",
      "boring",
      "bottle",
      "boy",
      "bond",
      "break",
      "busy",
      "calm",
      "camera",
      "car",
      "chapati",
      "cinema",
      "city",
      "clock",
      "coffee",
      "coin",
      "cup",
      "dam",
      "dish",
      "doctor",
      "door",
      "drama",
      "during",
      "e-mail",
      "earth",
      "empty",
      "energy",
      "equal",
      "extra",
      "eye",
      "face",
      "fake",
      "fan",
      "fall",
      "farmer",
      "fat",
      "fear",
      "few",
      "film",
      "final",
      "fine",
      "flag",
      "flower",
      "flute",
      "football",
      "footpath",
      "from",
      "fraud",
      "friend",
      "funny",
      "games",
      "ghee",
      "girl",
      "glass",
      "goal",
      "good",
      "grain",
      "grass",
      "gravity",
      "growth",
      "guilty",
      "gun",
      "hair",
      "hang",
      "health",
      "heart",
      "hello",
      "help",
      "here",
      "hindi",
      "his",
      "holiday",
      "home",
      "hot",
      "hurt",
      "jump",
      "keep",
      "kick",
      "late",
      "like",
      "lion",
      "love",
      "meet",
      "name",
      "never",
      "open",
      "parents",
      "pen",
      "sad",
      "sorry",
      "special",
      "sun",
      "sunset",
      "surprice",
      "table",
      "this",
      "tired",
      "train",
      "tree",
      "true",
      "ugly",
      "vision",
      "you",
    ],
    Basic_Words: [
      "beautiful",
      "between",
      "bucket",
      "business",
      "butterfly",
      "capital",
      "careless",
      "company",
      "compulsory",
      "computer",
      "condition",
      "confident",
      "country",
      "decrease",
      "discuss",
      "dislike",
      "distance",
      "diwali",
      "earthquake",
      "education",
      "election",
      "emergency",
      "employment",
      "entertainment",
      "excuseme",
      "expansive",
      "experiment",
      "genuine",
      "government",
      "handworking",
      "helicopter",
      "icecream",
      "leave",
      "schoolbag",
      "temptature",
      "thankyou",
      "website_video",
    ],
    Long_Words:['beautiful', 'between', 'bucket', 'business', 'butterfly', 'capital', 'careless', 'company', 'compulsory', 'computer', 'condition', 'confident', 'country', 'decrease', 'discuss', 'dislike', 'distance', 'diwali', 'earthquake', 'education', 'election', 'emergency', 'employment', 'entertainment', 'excuseme', 'expensive', 'experiment', 'genuine', 'government', 'hardworking', 'helicopter', 'icecream', 'schoolbag', 'temperature', 'thankyou'],
    Relation: ["mother", "father", "children", "grandfather", "mother", "my"],
    Animals: ["dog", "duck", "elephant", "fish", "monkey"],
    Time: [
      "afternoon",
      "evening",
      "month",
      "morning",
      "today",
      "time",
      "week",
      "year",
    ],
    Verb: [
      "accept",
      "agree",
      "buy",
      "call",
      "can",
      "catch",
      "change",
      "charge",
      "clean",
      "close",
      "come",
      "cry",
      "cut",
      "do",
      "drink",
      "eat",
      "enjoy",
      "exercise",
      "explain",
      "feel",
      "fight",
      "find",
      "finish",
      "follow",
      "give",
      "play",
      "push",
      "run",
      "sing",
      "sleep",
      "stand",
      "stir",
      "store",
      "study",
      "swap",
      "swim",
      "tell",
      "think",
      "touch",
      "walk",
      "want",
      "welcome",
      "win",
      "warn",
    ],
    Question: ["what", "when", "where", "who", "why"],
  };
  let overview = {
    Alphabet:
      "In this section, we will cover the sign gestures for each letter of the alphabet. We will start with the basics, teaching the hand shapes and movements that represent each letter from A to Z. By mastering the alphabet signs, students will gain the foundational skills needed to spell out words and communicate effectively using sign language.",
    Short_Words:
      "This section will focus on teaching sign gestures for commonly used short words in everyday communication. We will cover essential vocabulary that includes words like yes,no,please,thank you,hello,goodbye, and more. By learning these short words, students will be equipped to express themselves more fluently in sign language and engage in simple conversations.",
    Long_Words:
      " Building on the foundation laid in the previous sections, this module will introduce sign gestures for longer words that are frequently used in both casual and formal communication. Students will learn how to break down and express complex concepts through sign language, including words related to emotions, activities, objects, and descriptions. By expanding their vocabulary with long words, students will enhance their ability to convey nuanced meanings and engage in deeper conversations in sign language.",
    Relations:
      " In this section, we'll explore sign gestures for expressing relationships between individuals and describing familial connections. Students will learn how to sign words and phrases related to family members (such as mother,father,sibling,grandparent, etc. as well as terms for broader relationships like friend, partner, and colleague. By mastering signs for relations, students will be able to communicate about personal connections and social networks in sign language",
    Animals:
      "This module will focus on teaching sign gestures for a variety of animals, including common household pets, farm animals, wildlife, and more. Students will learn how to accurately represent the characteristics and movements of different animals through sign language. By expanding their animal vocabulary, students will be able to discuss animals, their habitats, behaviors, and interactions in sign language",
    Time: "In this section, we'll cover sign gestures for expressing various aspects of time, including days of the week, months, seasons, and specific times of day. Students will learn how to convey concepts like past, present, and future, as well as how to discuss schedules, appointments, and routines using sign language. By mastering signs related to time, students will gain the ability to discuss temporal concepts and plan activities effectively in sign language.",
    Verb: "This module will focus on teaching sign gestures for action verbs, enabling students to express actions, movements, and activities in sign language. Students will learn how to conjugate verbs and incorporate them into sentences to convey meaning effectively. By mastering verb signs, students will be able to describe actions, express intentions, and engage in dynamic communication in sign language",
    Question:
      "In this section, we will explore sign gestures for forming and asking questions in sign language. Students will learn how to use question words (such as who, what, where, when, why and how) and appropriate facial expressions to convey interrogative meaning. By mastering question signs, students will be able to initiate and participate in conversations, seek information, and engage in dialogue effectively using sign language",
  };
  const [bun, setbun] = useState(false);
  let whole = courses[course];
  console.log(whole);
  let len = whole.length;
  const newlist = [];
  const chunkSize = 4;
  for (let i = 0; i < whole.length; i += chunkSize) {
    const chunk = whole.slice(i, i + chunkSize);
    newlist.push(chunk);
  }
  console.log(newlist);
  let ckey = 0;
  let curr = 0;
  let prev = null;
  const handelnext = () => {
    prev = curr;
    curr += 1;
    if (curr == whole.length) {
      return;
    }
    console.log(whole[prev], whole[curr]);
    document.querySelector(".anim").src =
      "/static/PortraitVideo/" + course + "/" + whole[curr] + ".mp4";
    document.querySelector(".memory").src =
      "/static/abcgif/" + whole[curr] + ".mp4";
    document.querySelector(".crname").innerText = whole[curr];
  };

  const handelprev = () => {
    if (curr == 0) {
      return;
    }
    prev = curr - 1;
    curr -= 1;
    console.log(whole[prev], whole[curr]);
    document.querySelector(".anim").src =
      "/static/PortraitVideo/" + course + "/" + whole[curr] + ".mp4";
    document.querySelector(".memory").src =
      "/static/abcgif/" + whole[curr] + ".mp4";
    document.querySelector(".crname").innerText = whole[curr];
  };
  return (
    <div className="flex flex-col justify-center  md:flex-row px-4 md:px-10 py-5 gap-9 text-black font-Poppins">
      <div className="videoside w-full  md:w-1/2  pb-20 max-md:pb-0">
        <div className="content px-4 py-6 flex items-center justify-between">
          <button  onClick={() => handelprev()} className="prev rounded-full px-1 py-1 text-sm font-medium bg-[#222223]  text-white max-md:w-fit md:hidden">
          <FaRegArrowAltCircleLeft size={'3em'} color="white" />
          </button>
          <div className="actual flex max-md:block">
            <video
              className="anim"
              width={"250px"}
              muted
              src={
                "/static/PortraitVideo/" +
                course +
                "/" +
                whole[curr] +
                ".mp4"
              }
              controls
              autoPlay
              loop
              alt=""
            />
           {
            
course=='Alphabet'||course=='Animals'?<video
              className="memory"
              width={"250px"}
              src={"/static/abcgif/" + whole[curr] + ".mp4"}
              controls
              autoPlay
              loop
              muted
              alt=""
            />
            :<p className="font-bold px-3 py-1 mt-20 special">More Visual Content Comming Soon.....</p>
            }
          </div>
          <button  onClick={() => handelnext()} className="next  px-1 py-1 text-sm font-medium bg-[#222223] rounded-full  text-white max-md:w-fit md:hidden">
          <FaRegArrowAltCircleRight size={'3em'} color="white" />
          </button>
        </div>
        <div className="about px-4">
          <div className="head text-2xl font-medium capitalize flex justify-between flex-col md:flex-row">
         <div className="m flex"> Learn: <div className="crname"> {whole[curr]}</div></div>
            <div className="manage flex gap-2">
              <button className="prev px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white max-md:hidden max-md:w-[70vw]" onClick={() => handelprev()}>
               Previous
              </button>
              <button onClick={() => handelnext()} className="next px-4 py-2 text-sm font-medium bg-[#91cc5d] rounded-lg text-white max-md:hidden max-md:w-[70vw]">
               Next
              </button>
            </div>
          </div>
          <div className="box border bg-[#d4d4d4] rounded-lg  border-black px-3 py-2 flex w-[25%] max-md:w-fit gap-1 justify-center items-center mt-3">
            <FaPeopleGroup />
            Sign Talk
          </div>
          <div className="mored">
            <div className="mt-3 time flex gap-1 w-[27%] max-md:w-fit justify-start items-center text-sm">
              <IoMdTimer />
              43 minutes
            </div>
            <div className=" mt-2 time flex gap-1 w-[27%] max-md:w-fit justify-start items-center text-sm">
              🌟 4.3 out of 5
            </div>
          </div>
          <div className="overview mt-7">
            <p className="Overview text-2xl font-medium">OverView of Course</p>
            <p className="suboverview text-sm">{overview[course]}</p>
          </div>
        </div>
      </div>
      <div className="tracking w-full md:w-1/2 ">
        <div className="coursecontent py-3  font-medium text-2xl">
          Lesson Overview
        </div>
        <div className="track mt-1 bg-[#f0f0f0]">
          {newlist.map((elm) => {
            console.log(elm);
            ckey += 1;
            return (
              <div className="l" key={ckey}>
                <div
                  className="card flex px-3 py-2 justify-between items-center"
                  id={elm[0]}
                >
                  <div className="merge flex gap-3 items-center">
                    <div className="tick">
                      {" "}
                      <IoCheckmarkDoneSharp />
                    </div>
                    <div className="one">
                      <div className="int font-medium text-xl capitalize">
                        {elm[0].toUpperCase()}-{elm[3]}
                      </div>
                      <div className="module text-lg">Module {ckey} </div>
                    </div>
                  </div>
                  <div
                    className="coubutton bg-[#91cc5d] float-end w-9 h-9 flex items-center justify-center"
                    name={elm[0]}
                  >
                    <button
                      onClick={(e) => {
                        setbun(!bun);
                        let dropdownlist = document.querySelector("." + elm[0]);
                        console.log(dropdownlist);
                        if (bun) {
                          console.log("Hide", dropdownlist, bun);
                          dropdownlist.classList.add("hidden");
                        } else {
                          console.log("Show", dropdownlist, bun);
                          dropdownlist.classList.remove("hidden");
                        }
                      }}
                    >
                      {bun ? (
                        <FaAngleDown size={"1.6em"} />
                      ) : (
                        <FaAngleRight size={"1.6em"} />
                      )}
                    </button>
                  </div>
                </div>
                <div
                  className={
                    elm[0] +
                    " dropdownlist transition-opacity hidden mt-2 bg-[#d4d4d4] "
                  }
                >
                  {elm.map((sin) => {
                    return (
                      <Singleelm
                        val={sin}
                        curr={curr}
                        src1={"/static/PortraitVideo/" + course + "/"}
                        src2={"/static/abcgif/"}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;
