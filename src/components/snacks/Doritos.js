import React from 'react';
import doritos from '../../images/doritos.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Doritos = () => {
  return (
    <div>
      <div>
        <h1>Doritos!</h1>
        <div>
          <img src={doritos} alt="" />
        </div>
        <div className="button-container">
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doritos;
