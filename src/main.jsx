import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Courses from "./Component/Courses.jsx";
import Learn from "./Component/Learn.jsx";
import Landing from "./Component/Landing.jsx";
import Dictionary from "./Component/Dictionary.jsx";
import Contact from "./Component/Contact.jsx";
import Speech from "./Component/Speech.jsx";
import Sign from "./Component/Sign.jsx";
import DictionaryPage from "./Component/DictionaryPage.jsx";
import WordDetailPage from "./Component/WordDetailPage.jsx";

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="Explore" element={<Landing />} />
      <Route path="Courses" element={<Courses />} />
      <Route path="Speech" element={<Speech/>} />
      <Route path="Sign" element={<Sign/>} />
      <Route path="/Learn/:course" element={<Learn/>} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Dictionary" element={<DictionaryPage/>} />
      <Route path="/word/:word" element={<WordDetailPage/>} />
      <Route path="Signup" element={<Navbar />} />
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>
);
