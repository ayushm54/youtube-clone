import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { logo } from "../utils/constants";

const NavBar = ({ handleSearchInput }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="navbar">
      <div className="navbar-item">
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
      </div>
      <div className="navbar-item search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-bar-item search-input"
          onChange={(event) => handleSearchInput(event.target.value)}
        />
        <button type="button" className="search-icon">
          <IoMdSearch fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
