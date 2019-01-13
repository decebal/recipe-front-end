// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'reactackle-core';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Main from './containers/Main';
import * as theme from './theme';


const App = () => (
  <Theme>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Sidebar />
          <Main />
        </div>
      </Router>
    </ThemeProvider>
  </Theme>
);

export default App;
