import React from "react";
import { BrowserRouter as Router, Routes as Rout, Route } from "react-router-dom";
import { Error } from '../Pages/Error';
import { Navigation } from '../components/Navbar/Navigation';

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Rout>
        <Route path="/*" element={<Error/>}></Route>
      </Rout>
    </Router>
  );
};

export default Routes