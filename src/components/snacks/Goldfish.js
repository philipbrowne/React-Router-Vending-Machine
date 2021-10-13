import React from 'react';
import goldfish from '../../images/goldfish.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Goldfish = () => {
  return (
    <div>
      <div>
        <h1>Goldfish!</h1>
        <div>
          <img src={goldfish} alt="" />
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

export default Goldfish;
