import React from "react";
import { useState } from "react";

function WachedMovies({children}) {
  console.log(children)
  const [isOpen2, setIsOpen2] = useState(true);
  const [child1, child2, child3] = React.Children.toArray(children);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
        {child3}
          {child1}

          <ul className="list">
           {child2}
          
          </ul>
        </>
      )}
    </div>
  );
}

export default WachedMovies;
