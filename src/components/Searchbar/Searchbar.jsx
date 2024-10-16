import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [countryName, setCountryName] = useState("");
  const [capital, setCapital] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Llamar a onSearch con el objeto que contiene los criterios de búsqueda
    onSearch({ countryName, capital, language });
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex'>
      <input
        type='text'
        name='countryName'
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder='Search by country name...'
        className='form-control me-2'
      />
      <input
        type='text'
        name='capital'
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        placeholder='Search by capital...'
        className='form-control me-2'
      />
      <input
        type='text'
        name='language'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder='Search by language...'
        className='form-control me-2'
      />
      <button type='submit' className='btn btn-outline-success'>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
