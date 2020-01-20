import React from "react";

const SearchBar = ({ onHandleSubmit, onHandleGetValue }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onHandleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onHandleGetValue}
      />
    </form>
  </header>
);

export default SearchBar;
