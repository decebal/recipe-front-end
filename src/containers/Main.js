// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import Home from './Home';
import GenericNotFound from '../components/GenericNotFound';
import RecipePage from './RecipePage';
import NewRecipe from './NewRecipe';
import EditRecipe from './EditRecipe';

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/new" component={NewRecipe} />
      <Route path="/recipe/:uuid" component={RecipePage} />
      <Route path="/recipe/:uuid/edit" component={EditRecipe} />
      <Route component={GenericNotFound} />
    </Switch>
  </Container>
);

export default Main;
