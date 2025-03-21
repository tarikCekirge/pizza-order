import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkButton = ({ to = '/', text }) => {
    return (
        <NavLink to={to} className='font-barlow font-600 text-xl lg:text-2xl text-gray-950 bg-yellow-400 py-3 lg:py-4 px-12 lg:px-16 rounded-full hover:shadow-lg hover:shadow-yellow-600 transition-shadow'>
            {text}
        </NavLink>
    )
}

export default LinkButton
