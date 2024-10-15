import React from "react";

const Searchbar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <input
        type='text'
        onChange={handleInputChange}
        placeholder='Search country...'
      />
    </>
  );
};

export default Searchbar;
