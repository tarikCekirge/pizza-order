import React from 'react'

const CheckBox = ({ index, check }) => {
    return (
        <label key={index} className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name="extra" value={check.name} className="form-checkbox size-4 text-yellow-400 focus-within:ring-0 focus:ring-0  focus:outline-0 focus:border-none" />
            <span className="ml-2 text-gray-600 text-balance font-600 leading-0">{check.name}</span>
        </label>
    )
}

export default CheckBox
