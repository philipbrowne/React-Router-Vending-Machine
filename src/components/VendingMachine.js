import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Cheetos from './snacks/Cheetos';
import Doritos from './snacks/Doritos';
import Goldfish from './snacks/Goldfish';
import Hersheys from './snacks/Hersheys';
import KitKat from './snacks/KitKat';
import Lays from './snacks/Lays';
import Oreos from './snacks/Oreos';
import Reeses from './snacks/Reeses';
import Home from './Home';
import NavBar from './NavBar';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/doritos">
          <Doritos />
        </Route>
        <Route exact path="/goldfish">
          <Goldfish />
        </Route>
        <Route exact path="/hersheys">
          <Hersheys />
        </Route>
        <Route exact path="/kitkat">
          <KitKat />
        </Route>
        <Route exact path="/lays">
          <Lays />
        </Route>
        <Route exact path="/oreos">
          <Oreos />
        </Route>
        <Route exact path="/reeses">
          <Reeses />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
