// @flow
/* eslint-disable react/no-children-prop */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? 'active' : ''}>
        {match ? '> ' : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

OldSchoolMenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool,
};

OldSchoolMenuLink.defaultProps = {
  activeOnlyWhenExact: false,
};

export default OldSchoolMenuLink;
