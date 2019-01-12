// @flow
import React from 'react';
import OldSchoolMenuLink from './OldSchoolMenuLink';

const Sidebar = () => (
  <div>
    <OldSchoolMenuLink activeOnlyWhenExact to="/" label="Home" />
  </div>
);

export default Sidebar;
