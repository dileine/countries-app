import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const CountriesList = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No countries available</p>;
  }

  return (
    <Row>
      {countries.map((country) => (
        
        <Col xs={12} sm={6} md={4} lg={3} key={country.cca3} className='mb-2'>
          <Card className='country-link purple'>
            <Card.Body>
              <Link
                to={`/country/${country.name.common}`}
                className='country-link purple'
              >
                <Card.Title>{country.name.common}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CountriesList;
