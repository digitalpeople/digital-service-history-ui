import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './forms.scss';

const TextInput = (props) => {
  const {
    name,
    label,
    isPassword,
    onChange,
  } = props;
  const [value, setValue] = useState('');

  return (
    <div className="component form-group">
      <input
        type={isPassword ? 'password' : 'text'}
        name={name}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => onChange(value)}
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
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  isPassword: false,
};

export default TextInput;
