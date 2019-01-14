import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: .5rem;  
`;

const Label = ({
  error, className, children, ...props
}) => (
  <StyledLabel {...props}>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Label.defaultProps = {
  error: null,
  className: null,
};

export default Label;
