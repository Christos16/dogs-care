import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldsGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
      {info && (
        <small className='form-text text-muted' style={{ color: 'purple' }}>
          {info}
        </small>
      )}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

TextFieldsGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldsGroup.defaultProps = {
  type: 'text'
};

export default TextFieldsGroup;
