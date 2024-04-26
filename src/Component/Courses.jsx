import React from "react";
import Card from "./Card";
import Iconscard from "./Iconscard";
import Track from "./Track";
const Courses = () => {
  // Sample data
  const courses = {
    Alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    Short_Words: ["advise", "all", "always", /* More words... */],
    Long_Words: ["beautiful", "between", "bucket", /* More words... */],
    Relation: ["mother", "father", "children", /* More relations... */],
    Animals: ["dog", "duck", "elephant", /* More animals... */],
    Time: ["afternoon", "evening", "month", /* More time related words... */],
    Verb: ["accept", "agree", "buy", /* More verbs... */],
    Question: ["what", "when", "where", "who", "why"],
  };

  const categories = [
    "ISL Basics",
    "ISL Practice Sessions",
    "ISL Culture and History",
    "ISL Workshops and Events",
    "ISL News and Updates",
    "ISL Resources and References",
    "ISL Community Forums",
  ];

  // Render courses
  const renderCourses = () => {
    return Object.keys(courses).map((course, index) => (
      <Card key={index} time="3.12" rate="4" name={course} />
    ));
  };

  // Render categories
  const renderCategories = () => {
    return categories.map((category, index) => (
      <Iconscard src={index+1} name={category} />
    ));
  };

  return (
    <div className="px-10 py-2 main text-black bg-white font-['Poppins']">
      <div className="headers">
        <p className="text-2xl mb-5 max-md:mt-10">Featured Courses</p>
        <div className="ml-5 courses gap-2 flex flex-wrap md:justify-start items-center">
          {renderCourses()}
        </div>
      </div>
      <div className="categories mt-4 font-['Poppins']">
        <p className="text-2xl mb-5">Categories</p>
        <div className="ml-5 gap-2 flex flex-wrap justify-start items-center category">
          {renderCategories()}
        </div>
      </div>
      <div className="mylearning mt-4 font-['Poppins']">
        <p className="text-2xl mb-5">My Learning</p>
        <div className="ml-5 continue flex gap-2 max-md:block">
          <Track name={"Alphabet"} src={"static/Alphabet.jpg"} />
          <Track name={"Animals"} src={"static/Animals.jpg"} />
          <Track name={"Verb"} src={"static/Verb.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
