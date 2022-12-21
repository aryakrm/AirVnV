import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '',
        element: <SignUp />,
    },
    {
        path: 'contact',
        element: <SignIn />,
    },
];

export default AppRoutes;
