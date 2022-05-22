import React from "react";
import "../../scss/footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" mt-3">
      <footer className="footer-area mt-1 bg-dark  container-fluid px-5 pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 text-white">
              <h1>LOGO</h1>
              <p>
                Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut
                labore el dolore alg minim veniam quis nostrud ncididunt.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 text-white">
              <h3>QUICK LINKS</h3>
              <ul className="footerLinks">
                <li>
                  <Link to={"/"} className="footer-link">
                  <i className="fa-solid fa-house mx-3"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/Aboutus"} className="footer-link">
                  <i className="fa-solid fa-people-group mx-3"></i>
                    Aboutus
                  </Link>
                </li>
                <li>
                  <Link to={"/Contact"} className="footer-link">
                  <i className="fa-solid fa-phone mx-3"></i>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/Login"} className="footer-link">
                  <i className="fa-solid fa-right-to-bracket mx-3"></i>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/SignUp"} className="footer-link">
                  <i className="fa-solid fa-right-from-bracket mx-3"></i>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 text-white">
              <h3>RECENT POSTS</h3>
              <p>No Recent Post</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
