import React, { useEffect, useState } from "react";
import CountriesList from "../../components/CuntriesList/CountriesList";
import { fetchAllCountries } from "../../api/fetchCountries";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchAllCountries();
      setCountries(countriesData);
    };

    getCountries();
  }, []);

  return( <CountriesList countries={countries} />);
};

export default Home;
