import React from 'react'
import { NavLink } from 'react-router-dom'
import SiteLogo from './site-logo'
import BreadCrumbs from './breadcrumbs'

const MainNavigation = () => {
    return (
        <header>
            <nav className='flex justify-between items-center pt-12 pb-6 px-4 lg:px-0 bg-red-600'>
                <div className="container mx-auto max-w-xl">
                    <SiteLogo />
                    <BreadCrumbs />
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation