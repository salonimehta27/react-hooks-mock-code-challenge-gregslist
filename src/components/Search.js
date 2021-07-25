import React from "react";

function Search({ onSearch, handleSearch }) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={onSearch}
        onChange={(handleSearch)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
