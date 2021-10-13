import React from 'react';
import cheetos from '../../images/cheetos.gif';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cheetos = () => {
  return (
    <div>
      <h1>Cheetos!</h1>
      <div>
        <img src={cheetos} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cheetos;
