import React from 'react';
import lays from '../../images/lays.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Lays = () => {
  return (
    <div>
      <div>
        <h1>Lays!</h1>
        <div>
          <img src={lays} alt="" />
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

export default Lays;
