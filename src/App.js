import React from "react";
import "./App.css";
import Input from "./input";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

function App() {
  return (
    <div className="search-bar">
      <Input />
      <SearchBar props="Search" />
    </div>
  );
}

export default App;
