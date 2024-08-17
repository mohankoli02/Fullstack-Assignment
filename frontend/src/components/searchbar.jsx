import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar">
      <h1>How can we help?</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
