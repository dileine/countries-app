import React from "react";

const Searchbar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      className='form-control me-2 navbar bg-body-tertiary'
      type='text'
      onChange={handleInputChange}
      placeholder='Search country...'
    />
  );
};

export default Searchbar;
