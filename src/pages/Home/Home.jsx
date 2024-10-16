import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import {
  fetchAllCountries,
  filterCountriesByRegion,
} from "../../api/fetchCountries";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import RegionFilter from "../../components/RegionFilter/RegionFilter";

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

  const handleSearch = async (query) => {
    const { countryName, capital, language } = query;

    let filteredCountries = countries;

    // Filtrar per nom del pais
    if (countryName) {
      const lowerCaseCountryName = countryName.toLowerCase();
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(lowerCaseCountryName)
      );
    }

    // Filtrar per capital
    if (capital) {
      const lowerCaseCapital = capital.toLowerCase();
      filteredCountries = filteredCountries.filter(
        (country) =>
          country.capital &&
          country.capital[0].toLowerCase().includes(lowerCaseCapital)
      );
    }

    //Filtrar per idioma
    if (language) {
      const lowerCaseLanguage = language.toLowerCase();
      filteredCountries = filteredCountries.filter((country) =>
        Object.values(country.languages).some((lang) =>
          lang.name.toLowerCase().includes(lowerCaseLanguage)
        )
      );
    }

    setFilteredCountries(filteredCountries);
  };

  const handleRegionChange = async (region) => {
    if (region) {
      const filtered = await filterCountriesByRegion(region);
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries); // Restablir tots el països si no ha res selccionat
    }
  };

  const resetFilters = () => {
    setFilteredCountries(countries);
  };

  return (
    <div>
      <Header onResetFilters={resetFilters} />
      <Searchbar onSearch={handleSearch} />
      <RegionFilter onRegionChange={handleRegionChange} />
      <CountriesList countries={filteredCountries} />
    </div>
  );
};

export default Home;
