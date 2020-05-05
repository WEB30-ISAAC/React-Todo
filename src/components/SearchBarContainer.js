import React from "react";
// import "./SearchBar.css";


export default function SearchBar({ getFilteredItems, searchTerm}) {
  // On 'change' of the input we should set a new search term in app state
  const changeHandler = event => {
    const inputTerm = event.target.value
    getFilteredItems(inputTerm)
  }

  return (
    <div className="search-bar-wrapper">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={changeHandler} 
        />
      </form>
    </div>
  );
};