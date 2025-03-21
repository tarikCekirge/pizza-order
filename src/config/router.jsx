import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import OrderLayout from '../layouts/OrderLayout';

import HomePage from '../pages/Home';
import OrderPage from '../pages/Order';
import SuccessPage from '../pages/Success';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },


        ]
    },
    {
        path: 'order',
        element: <OrderLayout />,
        children: [
            { index: true, element: <OrderPage /> },

        ]
    },
    {
        path: 'success', element: <RootLayout />,
        children: [
            { index: true, element: <SuccessPage /> }]
    },
],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

export default router;
