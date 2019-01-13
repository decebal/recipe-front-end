// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../components/List';

const Home = ({ recipes }) => (
  <HomeComponent recipes={recipes} />
);

Home.propTypes = {
  recipes: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

Home.defaultProps = {
  recipes: {},
};

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
