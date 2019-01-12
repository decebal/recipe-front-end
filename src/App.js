// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'reactackle-core';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';
import * as theme from './theme';


const App = () => (
  <Theme>
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <hr />
        <MainContainer />
      </Router>
    </ThemeProvider>
  </Theme>
);

export default App;
