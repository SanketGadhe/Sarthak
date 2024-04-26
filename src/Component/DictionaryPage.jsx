import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { LuMoveUpRight } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
const DictionaryPage = () => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  alphabet = alphabet.split("");
  const [query, setquery] = useState("");
  const dictionary = [
    "a",
    "accept",
    "advise",
    "afternoon",
    "agree",
    "all",
    "always",
    "arm",
    "around",
    "b",
    "baby",
    "back",
    "bat",
    "bear",
    "beautiful",
    "before",
    "between",
    "blind",
    "bond",
    "boring",
    "bottle",
    "boy",
    "break",
    "bucket",
    "business",
    "busy",
    "butterfly",
    "buy",
    "c",
    "calm",
    "camera",
    "can",
    "capital",
    "car",
    "careless",
    "change",
    "chapati",
    "charge",
    "children",
    "cinema",
    "city",
    "clean",
    "clock",
    "close",
    "coin",
    "come",
    "company",
    "compulsory",
    "computer",
    "condition",
    "confident",
    "country",
    "cry",
    "cup",
    "cut",
    "d",
    "dam",
    "decrease",
    "discuss",
    "dish",
    "dislike",
    "distance",
    "diwali",
    "do",
    "doctor",
    "dog",
    "door",
    "drama",
    "drink",
    "duck",
    "during",
    "e-mail",
    "e",
    "earth",
    "earthquake",
    "eat",
    "education",
    "election",
    "Elephant",
    "elephant",
    "emergency",
    "employment",
    "empty",
    "energy",
    "enjoy",
    "entertainment",
    "equal",
    "evening",
    "excuseme",
    "exercise",
    "expensive",
    "experiment",
    "explain",
    "extra",
    "eye",
    "f",
    "face",
    "fall",
    "fan",
    "farmer (2)",
    "fat",
    "father",
    "fear",
    "feel",
    "few",
    "fight",
    "film",
    "final",
    "find",
    "fine",
    "finsh",
    "fish",
    "fishes",
    "flag",
    "flower",
    "flute",
    "follow",
    "football",
    "footpath",
    "form",
    "fraud",
    "friend",
    "funny",
    "g",
    "games",
    "genuine",
    "girl",
    "give",
    "glass",
    "goal",
    "good",
    "government",
    "grain",
    "grandfather",
    "grass",
    "gravity",
    "growth",
    "guilty",
    "gun",
    "h",
    "hair",
    "hang",
    "hardworking",
    "health",
    "heart",
    "helicopter",
    "hello",
    "help",
    "here",
    "hindi",
    "his",
    "holiday",
    "home",
    "hot",
    "hurt",
    "i",
    "icecream",
    "j",
    "jump",
    "k",
    "keep",
    "kick",
    "l",
    "late",
    "like",
    "lion",
    "love",
    "m",
    "meet",
    "Monkey",
    "monkey",
    "month",
    "morning",
    "mother",
    "my",
    "n",
    "name",
    "never",
    "o",
    "open",
    "p",
    "parents",
    "pen",
    "play",
    "push",
    "q",
    "r",
    "run",
    "s",
    "sad",
    "schoolbag",
    "sing",
    "sleep",
    "sorry",
    "special",
    "stand",
    "stir",
    "store",
    "study",
    "sun",
    "sunset",
    "surprice",
    "sweep",
    "swim",
    "t",
    "table",
    "tell",
    "temperature",
    "thankyou",
    "think",
    "this",
    "time",
    "tired",
    "today",
    "touch",
    "train",
    "tree",
    "true",
    "u",
    "ugly",
    "v",
    "vision",
    "w",
    "walk",
    "want",
    "warn",
    "week",
    "welcome",
    "what",
    "when",
    "where",
    "who",
    "why",
    "win",
    "x",
    "y",
    "year",
    "you",
    "z",
  ];
  if ("accept" in dictionary) {
    console.log("jcdm");
  }
  const [found, setfound] = useState("");
  useEffect(() => {
    
    let result = document.querySelector(".result a");
    if (dictionary.includes(query.trimEnd().toLowerCase())) {
      console.log(result);
      result.innerText = query;
      result.setAttribute("href", "word/" + query);
      setfound(query);
    } else {
      console.log(query);
      result.innerText = "";
    }
  }, [query]);
  return (
    <div>
      <div className="search flex items-center max-md:mt-7">
        <input
          type="search"
          name=""
          id=""
          value={query}
          onChange={(e) => {
            setquery(e.target.value);
          }}
          className="border-2 max-md:w-full  ml-5 mt-4 rounded-lg px-3 py-2 text-xl"
          placeholder="Search for word "
        />
        <IoSearch  className="mt-4" size={"2em"} color="#8383f5" onClick={()=>{
          if(dictionary.includes(query.trimEnd().toLowerCase())){
            result.innerText = query;
            result.setAttribute("href", "word/" + query);
          }
          else{
    let result = document.querySelector(".result a");
            result.innerText='No Such Result'
          }
        }} />
      </div>
      <div className="result mx-8  absolute px-3 flex  items-center text-xl">
        {query ? <LuMoveUpRight /> : ""}
        <Link to={`/word/${found}`}></Link>
      </div>
      <div className="characters flex gap-2 justify-center  mt-10">
        <div className="cha flex flex-wrap w-1/2 max-md:w-full border-blue-200 justify-center gap-1">
          {alphabet.map((elm) => {
            return (
              <a href={"#" + elm} key={elm}>
                <button className=" bg-[#C5FF95] shadow-2xl px-3 py-2 rounded-lg">
                  {elm}
                </button>
              </a>
            );
          })}
        </div>
      </div>
      <div className="dict flex justify-center mt-10  ">
        <div className="mds w-1/2 border-2 max-md:w-full">
          {dictionary.map((elm) => {
            if (elm.length == 1) {
              return (
                <div className="he">
                  <div
                    id={elm.toUpperCase()}
                    className="bloc font-bold text-xl uppercase border bg-[#77B0AA]"
                  >
                    {elm}
                  </div>
                  <p className="uppercase px-2 py-2"> <Link to={`/word/${elm}`}>{elm}</Link></p>
                </div>
              );
            }
            return (
              <div className="he">
                <p className="uppercase px-2 py-2">
                  <Link to={`/word/${elm}`}>{elm}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default DictionaryPage;
