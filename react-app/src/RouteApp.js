import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Employee from "./components/Employee";
import Post from "./components/Post";

const RouterApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* react-router-dom v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/:post_id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;

// http method: get, post, update(post/id), delete

// how to make js async
// callback
// promises - ES6
// async & await -ES7
