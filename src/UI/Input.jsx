import React from 'react'

const Input = ({ name, value, onChange, onBlur }) => {
    return (
        <label className="inline-flex items-center cursor-pointer w-full">
            <input type="text" name={name}
                value={value} onChange={onChange}
                onBlur={onBlur}
                className="mt-1 block w-full rounded border-gray-200 focus:ring-0 focus:border-gray-500"

            />
        </label>
    )
}

export default Input
