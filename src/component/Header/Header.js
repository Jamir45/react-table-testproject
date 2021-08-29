import React from "react";
import { Link } from "react-router-dom";
import "../tableStyle.css";

const Header = () => {
  return (
    <div className="tableMenu">
      <ul>
        <li>
          <Link to="/full/table">Full Table</Link>
        </li>
        <li>
          <Link to="/header-and-footer/table">Header Footer Table</Link>
        </li>
        <li>
          <Link to="/sorted/table">Sorted Table</Link>
        </li>
        <li>
          <Link to="/global-and-column/table">
            GlobalAndColumn Search Table
          </Link>
        </li>
        <li>
          <Link to="/patination/table">Pagination Table</Link>
        </li>
        <li>
          <Link to="/column-hiding/table">Column Hiding Table</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
