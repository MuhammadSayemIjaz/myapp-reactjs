import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
