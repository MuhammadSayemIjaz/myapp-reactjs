import React from "react";
import Navigation from "../Navbar/Navigation";
const Header = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarTogglerDemo03"
    //         aria-controls="navbarTogglerDemo03"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <Link className="navbar-brand" to={"/"}>
    //         Navbar
    //       </Link>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link active" to={"/"}>
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/About">About Us</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to="/Contact">Contact us</Link>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input
    //             className="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <>
        <Navigation/>
    </>
  );
};

export default Header;
