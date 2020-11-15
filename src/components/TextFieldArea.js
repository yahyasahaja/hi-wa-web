import React from 'react';

const TextFieldArea = ({label, value = '', onChange, id, placeholder}) => {
  return (
    <div className="w-full mb-5" >
      <label htmlFor={id}>
        {label}
      </label>
      <textarea 
        className="mt-2 bg-gray-300 rounded p-2 w-full" 
        id={id} 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        placeholder={placeholder}
      />
    </div>
  )
};

export default TextFieldArea;