import React from "react";
import { Link, useParams } from "react-router-dom";

const WordDetailPage = () => {
  let { word } = useParams();
word=word.toLowerCase()
 
  // Mock video URL (replace with actual video URL)
  const videoUrl = `/static/anima/${word}.mp4`;

  return (
    <div>
      <Link to="/Dictionary" >
       <button className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-fit mb-1">Back</button> </Link>
    <div className="head uppercase font-bold special text-2xl text-center">
        {word}
    </div>
     <div className="flex justify-center">
     <video controls autoPlay className="w-64">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     </div>
      
    </div>
  );
};

export default WordDetailPage;