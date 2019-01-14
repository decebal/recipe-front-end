// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup,
  Container,
  H2, Hr,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  P,
  Row,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { Headline } from './layout';
import type RecipeType from '../types/recipe';


const listItems = ({ items }) => Object.values(items).map(item => (
  <ListGroupItem>{item}</ListGroupItem>
));

const Recipe = ({
  id, name, description, ingredients, instructions, onDelete,
}: RecipeType) => (
  <div>
    <Headline>{name}</Headline>
    <Row>
      <H2>Description</H2>
    </Row>
    <Jumbotron fluid>
      <Container>
        <P className="lead">{description}</P>
      </Container>
    </Jumbotron>
    <Hr />
    <Row>
      <H2>Ingredients</H2>
    </Row>
    <ListGroup>
      { listItems({ items: ingredients }) }
    </ListGroup>
    <Hr />
    <Row>
      <H2>Instructions</H2>
    </Row>
    <ListGroup>
      { listItems({ items: instructions }) }
    </ListGroup>
    <Hr />
    <Row style={{ flexFlow: 'row-reverse' }}>
      <ButtonGroup>
        <Button outline color="warning" href={`/recipe/${id}/edit`}>Edit Recipe</Button>
        <Button outline color="danger" onClick={() => onDelete({ id })}>Delete Recipe</Button>
      </ButtonGroup>
    </Row>
    <Hr />
  </div>
);

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Recipe;
