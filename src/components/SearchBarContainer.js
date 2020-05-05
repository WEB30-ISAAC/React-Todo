import React from "react";
// import "./SearchBar.css";


export default function SearchBar({ getFilteredItems}) {
  // On 'change' of the input we should set a new search term in app state
  const changeHandler = event => {
    const searchTerm = event.target.value
    getFilteredItems(searchTerm)
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