import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const routers = createBrowserRouter(AppRoutes);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={routers}></RouterProvider>
        </React.StrictMode>
    );
}

export default App;
