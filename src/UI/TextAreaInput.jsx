import React from 'react';

const TextAreaInput = ({ name, value, onChange, onBlur }) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="mt-1 block w-full rounded border-gray-200 focus:ring-0 focus:border-gray-500"
            rows="2"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
        />
    );
};

export default TextAreaInput;
