import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h2>Countries</h2>
      <Row>
        {countries.map((country) => (
          <Col xs={12} sm={6} md={4} lg={3} key={country.cca3} className='mb-2'>
            <Card>
              <Card.Body>
                <Link to={`/country/${country.name.common}`}>
                  <Card.Img
                    variant='top'
                    className='card-img-top'
                    src={country.flags.png}
                  />
                  <Card.Title>{country.name.common}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CountriesList;
