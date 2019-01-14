import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import Label from './Label';
import InputFeedback from './InputFeedback';

const StyledInput = styled.input`
  padding: .5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
`;

const PaddedInputGroup = styled.div`
  margin-bottom: 1rem;
`;

const TextInput = ({
  type, id, label, error, value, onChange, className, ...props
}) => {
  const classes = classnames(
    {
      'animated shake error': !!error,
    },
    className,
  );
  return (
    <PaddedInputGroup className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </PaddedInputGroup>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  error: null,
  className: null,
  value: '',
};


export default TextInput;
