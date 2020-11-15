import React from 'react';

const TextField = ({label, value = '', onChange, id, placeholder}) => {
  return (
    <div className="mb-5">
      <label htmlFor={id}>
        {label}
      </label>
      <input 
        className="mt-2 block p-2 border-b-2 border-black border-solid" 
        id={id} value={value} 
        onChange={e => onChange(e.target.value)} 
        placeholder={placeholder}
      />
    </div>
  )
};

export default TextField;