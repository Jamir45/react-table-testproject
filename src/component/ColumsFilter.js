import React from "react";

const ColumsFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      Search
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default ColumsFilter;
