import React from "react";
// import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">A Bayvarian Production</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Reading List</a>
      </li>
    </ul>
    <span className="navbar-text">
      Books Googler
    </span>
  </div>
</nav>
		);
} 

export default Navbar;