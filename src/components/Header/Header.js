import React from "react";
import "./header.scss";
import arrow from "../../images/icon-arrow.svg";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Header_container">
          <h2 className="Header_title">IP Address Tracker</h2>
          <div className="Header_search">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="Header_input"
            />
            <button type="button" className="Header_arrow">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
