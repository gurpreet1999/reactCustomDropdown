import React, { useRef, useState } from "react";
import "./dropdown.css";
import List from "./List";

const Dropdown = () => {
 

  const [clicked, setclicked] = useState(false);

//onclicking dropdown will be shown
  const showDropdown = () => {
    setclicked(!clicked);
  };

  const [selected, setselected] = useState("");

  const [value, setvalue] = useState("");

  //setting value whatever user has is seraching in input field
  const findingValue = (e) => {
    setvalue(e.target.value);
  };

  //setting value whatever user has selected
  const refrence = (selected) => {
    setselected(selected);

    setclicked(!clicked);
    setvalue("");
  };

  return (
    <div className="container">
      <div className="country" onClick={showDropdown}>
        {" "}
        <span>{selected ? selected : "Select Country"}</span>{" "}
        <span style={{ marginTop: "-5px" }}>
          {clicked ? (
            <i className="fa-solid fa-caret-up"></i>
          ) : (
            <i className="fa-solid fa-caret-down"></i>
          )}
        </span>{" "}
      </div>
      {clicked && (
        <div className="menu">
          <div className="search">
            <input
              type="text"
              placeholder="Search "
              name="search"
              value={value}
              onChange={findingValue}
            ></input>
          </div>
          <div className="list">
            <List value={value} refrence={refrence} selected={selected}></List>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
