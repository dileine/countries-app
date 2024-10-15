import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
