import React from "react";
function Serach({query,setQuery}) {
  function handelChange(e)
  {
    setQuery(e.target.value);
  }
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handelChange}
    />
  );
}

export default Serach;
