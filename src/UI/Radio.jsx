import React from 'react';

const Radio = ({ name, label, value, checked, onChange }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="form-radio size-4 text-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none"
            />
            <span className="ml-2 text-gray-600 font-medium">{label}</span>
        </label>
    );
};


export default Radio;
