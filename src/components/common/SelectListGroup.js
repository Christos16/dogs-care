import React from 'react';

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className='form-group'>
      <select
        className='form-control form-control-lg'
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        {' '}
        {selectOptions}
      </select>
      {info && (
        <small className='form-text text-muted' style={{ color: 'purple' }}>
          {info}
        </small>
      )}
    </div>
  );
};

export default SelectListGroup;
