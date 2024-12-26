import React from "react";
import Logo from "./Logo";
import Serach from "./Serach";

function NavBar({children,query,setQuery}) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Serach query={query} setQuery={setQuery} />
      {/* <NumberResult movies={movies} /> */}
      {children}
    </nav>
  );
}

export default NavBar;
