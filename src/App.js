/* eslint-disable import/no-unresolved */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import BootstrapProvider from '@bootstrap-styled/provider';
import { ConnectedRouter } from 'connected-react-router';


import Sidebar from './components/Sidebar';
import Main from './containers/Main';
import * as theme from './theme';


const App = ({ history }: { history: any }) => (
  <ConnectedRouter history={history}>
    <BootstrapProvider theme={theme}>
      <div>
        <Sidebar />
        <Main />
      </div>
    </BootstrapProvider>
  </ConnectedRouter>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object,
};

App.defaultProps = {
  history: null,
};

export default App;
