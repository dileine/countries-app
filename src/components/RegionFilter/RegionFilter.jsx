import React from "react";

const RegionFilter = ({ onRegionChange }) => {
  const handleChange = (event) => {
    onRegionChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value=''>Select a region</option>
      <option value='Africa'>Africa</option>
      <option value='America'>America</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
      <option value='Antarctic'>Antarctic</option>
    </select>
  );
};

export default RegionFilter;
