import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([])
  const [onSearch, setSearch] = useState("")
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <div className="app">
      <Header onSearch={onSearch} handleSearch={handleSearch} />
      <ListingsContainer list={list} setList={setList} onSearch={onSearch} />
    </div>
  );
}

export default App;
