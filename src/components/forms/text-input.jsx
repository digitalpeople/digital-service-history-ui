import React from 'react';
import PropTypes from 'prop-types';
import './forms.scss';

const TextInput = (props) => {
  const {
    name,
    label,
    isPassword,
  } = props;

  return (
    <div className="component form-group">
      <input
        type={isPassword ? 'password' : 'text'}
        name={name}
        className="form-control"
        required
      />
      <span
        htmlFor={name}
        className="label"
      >
        {label}
      </span>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};

TextInput.defaultProps = {
  isPassword: false,
};

export default TextInput;
