import React, { useEffect, useState } from "react";
import "./searchbar.css";

export const SearchBar = (props) => {
  const { width, height, data } = props;
  const [tempKey, setTempKey] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const searchBoxStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const listStyle = {
    width: `${width}px`,
    paddingLeft: "5px",
    borderColor: "1px solid #6F7E8C",
    borderRadius: "5px",
  };

  const handleOnChange = (tempValue) => {
    console.log(tempValue);
    const filteredData = data.filter(
      (d) => d.toLowerCase().indexOf(tempValue.toLowerCase()) !== -1
    );
    setTempKey(filteredData);
    setSearchKey(tempValue);
  };

  const handleClick = (selectedValue) => {
    setSearchKey(selectedValue);
    setTempKey("");
  };

  return (
    <div className="cus-com-search-wrapper">
      <input
        className="cus-com-search-box"
        role="searchbox"
        type={"search"}
        value={searchKey}
        style={searchBoxStyle}
        onChange={(e) => handleOnChange(e.target.value)}
      ></input>
      {data.length > 0 && tempKey !== "" && (
        <div className="cus-com-search-list" style={listStyle}>
          {tempKey.map((fd) => (
            <li onClick={() => handleClick(fd)}>{fd}</li>
          ))}
        </div>
      )}
    </div>
  );
};
