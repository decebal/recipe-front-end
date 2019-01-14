import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFeedbackInput = styled.label`
  color: #999;
  margin-top: .25rem;
`;

const InputFeedback = ({ error }) => (
  error
    ? <StyledFeedbackInput>{error}</StyledFeedbackInput>
    : null
);

InputFeedback.propTypes = {
  error: PropTypes.string,
};

InputFeedback.defaultProps = {
  error: null,
};

export default InputFeedback;
