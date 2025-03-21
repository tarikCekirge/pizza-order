import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const SiteLogo = () => {
    const alt = 'logo'
    return (
        <NavLink to="/" className='max-w-[300px] md:max-w-sm block'>
            <img src={logo} alt={alt} className='w-full' />
        </NavLink>
    )
}

export default SiteLogo
