import React from 'react'
import logo from '../assets/logo.svg'

const SiteLogo = () => {
    const alt = 'logo'
    return (
        <a href="/" className='max-w-sm block'>
            <img src={logo} alt={alt} className='w-full' />
        </a>
    )
}

export default SiteLogo
