import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onResetFilters }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("reset");
    onResetFilters();
    navigate("/");
  };

  return (
    <h1
      className='text-center my-4 country-link'
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      Countries of the World
    </h1>
  );
};

export default Header;
