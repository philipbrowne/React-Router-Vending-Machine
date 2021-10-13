import React from 'react';
import reeses from '../../images/reeses.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Reeses = () => {
  return (
    <div>
      <div>
        <h1>Reeses!</h1>
        <div>
          <img src={reeses} alt="" />
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

export default Reeses;
