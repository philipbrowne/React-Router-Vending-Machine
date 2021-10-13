import React from 'react';
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';

import vendingMachine from '../images/vending-machine.gif';

const Home = () => {
  return (
    <div>
      {/* <BrowserRouter></BrowserRouter> */}
      <div>
        <img src={vendingMachine} alt="" />
        <h1 className="display-2 mt-2">REACT ROUTER VENDING MACHINE</h1>
        <div className="button-container">
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
          <Link to="/cheetos">
            <Button color="primary">Cheetos</Button>
          </Link>
          <Link to="/doritos">
            <Button color="primary">Doritos</Button>
          </Link>
          <Link to="/goldfish">
            <Button color="primary">Goldfish</Button>
          </Link>
          <Link to="/hersheys">
            <Button color="primary">Hersheys</Button>
          </Link>
          <Link to="/kitkat">
            <Button color="primary">Kit Kat</Button>
          </Link>
          <Link to="/lays">
            <Button color="primary">Lays</Button>
          </Link>
          <Link to="/oreos">
            <Button color="primary">Oreos</Button>
          </Link>
          <Link to="/reeses">
            <Button color="primary">Reeses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
