import React from 'react';

export const InputGroup = ({ icon, placeholder, name, value, onChange }) => {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text'>
          <i className={icon} />
        </span>
      </div>
      <input
        className="'form-control form-control-lg'"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
