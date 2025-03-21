import React from 'react'

const Radio = ({ label, value }) => {
    return (
        <label class="inline-flex items-center cursor-pointer">
            <input type="radio" name="size" value={value} class="form-radio size-4 text-yellow-400 focus-within:ring-0 focus:ring-1 focus:ring-yellow-400 focus:outline-0 focus:border-none" />
            <span class="ml-2 text-gray-600 text-balance font-400 leading-0 ">{label}</span>
        </label>
    )
}

export default Radio
