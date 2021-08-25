import React from "react";

const SearchInput = ({ inputValue, setInputValue }) => {
  return (
    <div>
      Search User
      <input
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
