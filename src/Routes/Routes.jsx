import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import Footer from "../components/Footer/Footer";
import AddProducts from "../Pages/AddProducts";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/AddProducts" element={<AddProducts />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default Routing;
