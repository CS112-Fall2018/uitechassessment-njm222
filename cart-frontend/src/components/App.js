import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import Home from './Home.js';
import Cart from './Cart.js';
import Item from './Item.js';
import Nav from './Nav.js';


function AppRouter() {
  return (
        <div>
          <div className="App">
            <header className="App-header">
              <Router>
                <div>
                  <Nav className="mainNav"/>
                  <Route path="/" exact component={Home} />
                  <Route path="/cart/" component={Cart} />
                  <Route path="/item/" component={Item} />
                </div>
              </Router>
            </header>
          </div>
        </div>
  );
}

export default AppRouter;