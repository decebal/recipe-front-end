// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button, Card, CardBlock, CardDeck, CardTitle,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import type Recipe from '../types/recipe';
import { Headline } from './layout';
import type Recipes from '../types/recipes';

const PaddedCard = styled.div`
  margin: 10px;
`;

const recipesList = ({ recipes }) => Object.values(recipes).map((item: Recipe) => (
  <PaddedCard key={`recipe-${item.id}`}>
    <Card width="15rem">
      <CardBlock>
        <CardTitle>{item.name}</CardTitle>
        <Button color="primary" href={`/recipe/${item.id}`}>See more</Button>
      </CardBlock>
    </Card>
  </PaddedCard>
));

const List = ({
  recipes,
}: { recipes: Recipes}) => (
  <div>
    <Headline>Recipes</Headline>
    <CardDeck>
      { recipesList({ recipes }) }
      <PaddedCard>
        <Card width="15rem">
          <CardBlock>
            <Button color="success" href="/recipe/new">
              Create a new recipe
            </Button>
          </CardBlock>
        </Card>
      </PaddedCard>
    </CardDeck>
  </div>
);

List.propTypes = {
  recipes: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }),
};

List.defaultProps = {
  recipes: {},
};

export default List;
