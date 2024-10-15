import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search country...'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Searchbar;
