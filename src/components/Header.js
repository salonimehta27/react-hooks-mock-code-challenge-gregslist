import React from "react";
import Search from "./Search";

function Header({ onSearch, handleSearch }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch}
        handleSearch={handleSearch}
      />

    </header>
  );
}

export default Header;
