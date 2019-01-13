// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
  CardActions, CardActionsMain,
  CardAreaMain,
  CardHeaderSecondary,
} from 'reactackle-card';
import { Button } from 'reactackle-button';
import type Recipe from '../types/recipe';
import { Headline, Container } from './layout';
import type Recipes from '../types/recipes';

const PaddedCard = styled.div`
  margin: 10px;
`;

const recipesList = ({ recipes }) => Object.values(recipes).map((item: Recipe) => (
  <PaddedCard key={`recipe-${item.id}`}>
    <Card>
      <CardAreaMain>
        <CardHeaderSecondary
          title={item.name}
        />

        <CardActions>
          <CardActionsMain>
            <Button
              raised
              text="See more"
              href={`/recipe/${item.id}`}
            />
          </CardActionsMain>
        </CardActions>
      </CardAreaMain>
    </Card>
  </PaddedCard>
));

const List = ({
  recipes,
}: { recipes: Recipes}) => (
  <div>
    <Headline>Recipes</Headline>
    <Container>
      { recipesList({ recipes }) }
      <PaddedCard>
        <Card>
          <CardAreaMain>
            <CardActions>
              <CardActionsMain>
                <Button
                  raised
                  colorScheme="success"
                  text="Create a new recipe"
                  href="/recipe/new"
                />
              </CardActionsMain>
            </CardActions>
          </CardAreaMain>
        </Card>
      </PaddedCard>
    </Container>
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
