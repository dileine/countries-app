import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchCountryByName } from "../../api/fetchCountries";

const CountryDetails = () => {
  const { name } = useParams(); // extract name from URL
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      const countryData = await searchCountryByName(name);
      setCountry(countryData[0]); //only first element
    };

    getCountry();
  }, [name]);

  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name.common}</h1>
          <img src={country.flags.png} alt="Country's flag"></img>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population}</p>
          <p>Time Zone: {country.timezones}</p>
          <p>
            Map:{" "}
            <a href={country.maps.googleMaps} target='_blank' rel='noreferrer'>
              {country.maps.googleMaps}
            </a>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetails;
