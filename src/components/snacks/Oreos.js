import React from 'react';
import oreos from '../../images/oreos.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Oreos = () => {
  return (
    <div>
      <div>
        <h1>Oreos!</h1>
        <div>
          <img src={oreos} alt="" />
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

export default Oreos;
