import React from "react";

const SelectBox = ({ options, name, value, onChange }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="rounded w-full px-4 py-3 border border-gray-300 focus:outline-0 focus:ring-0"
        >
            <option value="" disabled>Hamur Kalınlığı</option>
            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
