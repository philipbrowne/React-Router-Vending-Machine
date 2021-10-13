import React from 'react';
import kitkat from '../../images/kitkat.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const KitKat = () => {
  return (
    <div>
      <div>
        <h1>KitKat!</h1>
        <div>
          <img src={kitkat} alt="" />
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

export default KitKat;
