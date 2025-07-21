// routes.jsx
import { useRoutes } from "react-router-dom";
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Error from './pages/error/Error'; // Make sure this exists

export const AppRoutes = () => {
    const publicRoutes = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/cart", element: <Cart /> },
                { path: "*", element: <Error /> },
            ],
        },
    ];

    return useRoutes(publicRoutes);
};
