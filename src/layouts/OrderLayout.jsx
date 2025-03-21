import React from 'react'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const OrderLayout = () => {
    return (
        <>
            <MainNavigation />
            <main> <Outlet /></main>
            <Footer />
        </>
    )
}

export default OrderLayout