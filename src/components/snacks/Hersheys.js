import React from 'react';
import hersheys from '../../images/hersheys.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hersheys = () => {
  return (
    <div>
      <div>
        <h1>Hersheys!</h1>
        <div>
          <img src={hersheys} alt="" />
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

export default Hersheys;
