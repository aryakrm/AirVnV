import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
