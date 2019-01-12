// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Headline, Container, Paragraph } from './layout';


const recipesList = ({ recipes }) => recipes.map(item => (
  <div key={`recipe-${item.id}`}>
    <Paragraph>
      {item.name}
    </Paragraph>
  </div>
));

const Home = ({
  recipes,
}) => (
  <div>
    <Headline>Recipes</Headline>
    <Container>
      { recipesList({ recipes }) }
    </Container>
  </div>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.shape({
        value: PropTypes.number,
        currency: PropTypes.string,
      }),
      name: PropTypes.string,
      measurement: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
