import React from 'react';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  info
}) => {
  return (
    <div className='form-group'>
      <textarea
        className='form-control form-control-lg'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
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

export default TextAreaFieldGroup;
