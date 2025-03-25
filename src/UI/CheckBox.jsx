import React from 'react';

const CheckBox = ({ label, value, checked, onChange, onBlur, name }) => {
    const handleChange = (e) => {
        onChange(e.target.checked);
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value={value}
                name={name}
                checked={checked}
                onChange={handleChange}
                onBlur={onBlur}
                className="form-checkbox size-4 text-yellow-400 focus:ring-0 focus:outline-none cursor-pointer"
            />
            <span className="ml-2 text-gray-600 font-medium leading-tight">{label}</span>
        </label>
    );
};

export default CheckBox;
