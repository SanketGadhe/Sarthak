import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here for handling form submission
    console.log(formData);
    // Reset form fields
    setFormData({
      email: '',
      mobile: '',
      message: ''
    });
  };
  return (
    <div>
      <div className="big w-full h-[70vh] bg-black  relative">
        <img src="static/sign-language-with-hands-studio (2).jpg" alt="" className="h-[70vh] w-full" />
      <div className="absolute w-72 h-24 bg-black hover:opacity-75 transition-opacity bottom-7 left-[50%] right-[50%] -translate-x-[50%] opacity-60 rounded-2xl text-white flex justify-center items-center text-3xl font-medium">Contact Us</div>
      </div>
      <div className="other flex max-md:block w-full mt-4 gap-2 px-3 ">
      
        <div className="detail  w-1/3 h-[40vh] max-md:mt-3 max-md:w-full max-md:h-fit px-3 py-2 bg-blue-100 hover:bg-blue-200 transition-all rounded-md shadow-lg border-green-500 ">
          <div className="head font-bold text-xl">Contact Us</div>
          <div className="info">
            <div className="number flex gap-5 items-start mt-2">
              <div className="type flex items-center gap-1"><FaPhoneAlt /></div>
              <div className="numbers">
                <div className="1">7875114776</div>
                <div className="2">9172102003</div>
                <div className="3">7066516974</div>
              </div>
            </div>
            <div className="email flex gap-5">
              <div className="type flex items-center gap-1"><MdAlternateEmail /></div>
          <div className="emailid">
            <a href="mailto:sarthak.signlanguage@gmail.com">sarthak.signlanguage@gmail.com</a></div>
            </div>
            <div className="address flex gap-5">
            <div className="type flex mt-1 gap-1"><IoLocationOutline /></div>
<div className="address">
<a  href="https://www.bing.com/maps?osid=b2e36102-f74b-49ce-aa28-f66dc72797db&cp=20.93131~74.783292&lvl=17&pi=0&v=2&sV=2&form=S00027">Survey No. 499, Plot No. 2, Mumbai Agra Highway, Behind Gurudwara, Dhule, Maharashtra</a></div>
            </div>
          </div>
        </div>
        <div className="social bg-red-100 w-1/3 max-md:mt-3 h-fit px-3 py-2  max-md:w-full max-md:h-fit  hover:bg-red-200 transition-all rounded-md shadow-lg border-green-500">
          <div className="follow font-bold text-xl">Follow Us At</div>
          <div className="insta flex items-center gap-3 mt-3">
          <FaSquareInstagram/> <a href="#">Sarthak.sarthi</a>
          </div>
          <div className="linkedin flex items-center gap-3">
<FaLinkedin/> <a href="#">Sarthaksigns</a>
          </div>
          <div className="twitter flex items-center gap-3">
          <FaSquareTwitter/> <a href="#">Sarthaksign</a>
          </div>
          <div className="belive ml-3 mr-3  my-2 italic text-sm">
            We belive to make change in your life.Reach us through various platform or fill out the form.
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-fit mb-1">
            <a href="#form">
            <button>
               Fill Form
            </button></a>
          </div>
        </div>
          <div className="location  w-1/3 h-[40vh]  max-md:mt-3 max-md:w-full max-md:h-fit  rounded-md shadow-lg border-green-500">
          <a  href="https://www.bing.com/maps?osid=b2e36102-f74b-49ce-aa28-f66dc72797db&cp=20.93131~74.783292&lvl=17&pi=0&v=2&sV=2&form=S00027">
            <img src="static/map.jpg" className="h-[100%] w-[100%] cursor-grab  rounded-md" alt="" />
          </a>
        </div>
      </div>
      <div className="form mt-6" id="form">
      <div className="flex gap-1 max-md:block">
      <form onSubmit={handleSubmit} className="bg-white shadow-md w-3/4 max-md:w-full ml-2 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="img">
        <img src="static/picture3.png" alt="" />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;