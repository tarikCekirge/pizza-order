import React from 'react'
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import router from '../config/router';


const BreadCrumbs = () => {
    const breadcrumbs = useBreadcrumbs(router.routes);

    return (
        <>
            <div className='mt-6 lg:mt-8'>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <NavLink className={({ isActive }) => isActive ? 'breadcrumb active' : 'breadcrumb'} key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>

                ))}
            </div>
        </>
    )
}

export default BreadCrumbs


