import React from "react";
import Search from "./Search";

function Header({ list, setList, onSearch, handleSearch }) {

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
        list={list}
        setList={setList} />
    </header>
  );
}

export default Header;
