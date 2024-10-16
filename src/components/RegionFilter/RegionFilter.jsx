import React from "react";

const RegionFilter = ({ onRegionChange }) => {
  const handleChange = (event) => {
    onRegionChange(event.target.value);
  };

  return (
    <select className='nav-link dropdown-toggle m-2' onChange={handleChange}>
      <option className='dropdown-item' value=''>
        Select a region
      </option>
      <option className='dropdown-item' value='Africa'>
        Africa
      </option>
      <option className='dropdown-item' value='America'>
        America
      </option>
      <option className='dropdown-item' value='Asia'>
        Asia
      </option>
      <option className='dropdown-item' value='Europe'>
        Europe
      </option>
      <option className='dropdown-item' value='Oceania'>
        Oceania
      </option>
      <option className='dropdown-item' value='Antarctic'>
        Antarctic
      </option>
    </select>
  );
};

export default RegionFilter;
