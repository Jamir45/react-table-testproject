import React from "react";

const ColumnsSearch = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <input style={{ width: '95%' }}
        value={filterValue || ""}
        placeholder='Search'
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default ColumnsSearch;
