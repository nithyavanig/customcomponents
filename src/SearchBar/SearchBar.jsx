import React, { useEffect, useRef, useState } from "react";
import "./searchbar.css";

export const SearchBar = (props) => {
  const { width, height, data } = props;
  const [tempKey, setTempKey] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const searchInputRef = useRef(null);
  useEffect(() => {
    searchInputRef.current.addEventListener("search", () => handleClose());
  }, []);

  const searchBoxStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const listStyle = {
    width: `${width - 5}px`,
  };

  const handleOnChange = (tempValue) => {
    console.log(tempValue);
    const filteredData = data.filter(
      (d) => d.toLowerCase().indexOf(tempValue.toLowerCase()) !== -1
    );
    setTempKey(filteredData);
    setSearchKey(tempValue);
  };

  const handleClose = () => {
    setTempKey("");
  };

  const handleClick = (selectedValue) => {
    setSearchKey(selectedValue);
    setTempKey("");
  };

  return (
    <div className="cus-com-search-wrapper">
      <input
        ref={searchInputRef}
        className="cus-com-search-box"
        id="cus-com-search-box"
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
