import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CuntriesList/CountriesList";
import { fetchAllCountries } from "../../api/fetchCountries";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const allCountriesData = await fetchAllCountries();
      setCountries(allCountriesData); //guarda tots els països per no repetir API calls
      setFilteredCountries(allCountriesData); // mostra tots els països al principi
    };

    getCountries();
  }, []);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <Header />
      <Searchbar onSearch={handleSearch} />
      <CountriesList countries={filteredCountries} />
    </div>
  );
};

export default Home;
