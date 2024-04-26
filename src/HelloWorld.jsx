import React, { useEffect, useState } from 'react'
import axios from 'axios';
const HelloWorld = () => {const [message, setmessage] = useState('');
useEffect(() => {
  axios.get('http://localhost:8000/api/hello-world/')
  .then(response=>{
   setmessage(response.data.message);
  })
  .catch(error=>{
   console.log(error);
  });
}, []);


 return (
   <div>
     <h1>Hellow World</h1>
     <p>{message}</p>
   </div>
 )
}

export default HelloWorld
