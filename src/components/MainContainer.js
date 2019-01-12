// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const MainContainer = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);

export default MainContainer;
