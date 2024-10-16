import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchCountryByName } from "../../api/fetchCountries";
import { Card } from "react-bootstrap";

const CountryDetails = () => {
  const { name } = useParams(); // extreure el nom del país de  URL
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      const countryData = await searchCountryByName(name);
      setCountry(countryData[0]);
    };

    getCountry();
  }, [name]);

  return (
    <Card className='text-center m-4'>
      {country ? (
        <Card.Body className='purple'>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Img
            className='card-img-top'
            variant='top'
            src={country.flags.svg}
            alt="Country's flag"
          />
          <Card.Text>Capital: {country.capital}</Card.Text>
          <Card.Text>Region: {country.region}</Card.Text>
          <Card.Text>Population: {country.population}</Card.Text>
          <Card.Text>Time Zone: {country.timezones}</Card.Text>
          <Card.Text>
            Map:{" "}
            <Card.Link
              className='country-link'
              href={country.maps.googleMaps}
              target='_blank'
              rel='noreferrer'
            >
              {country.maps.googleMaps}
            </Card.Link>
          </Card.Text>
        </Card.Body>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
};

export default CountryDetails;
