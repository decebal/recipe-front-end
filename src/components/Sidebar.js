// @flow
import React from 'react';
import Navbar from '@bootstrap-styled/v4/lib/Navbar';
import {
  Container, Nav, NavItem,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import OldSchoolMenuLink from './OldSchoolMenuLink';

const Sidebar = () => (
  <Navbar color="faded" light toggleable="lg">
    <Container>
      <Nav navbar className="mr-auto">
        <NavItem>
          <OldSchoolMenuLink activeOnlyWhenExact to="/" label="Home" />
        </NavItem>
      </Nav>
    </Container>
  </Navbar>
);

export default Sidebar;
