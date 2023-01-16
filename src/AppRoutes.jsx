import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProperty from './pages/AddProprety';
import AddAboutYourPlace from './components/AddAboutYourPlace';
import AddType from './components/AddType';
import AddLocation from './components/AddLocation';
import AddDetails from './components/AddDetails';
import AddTitle from './components/AddTitle';
import AddImages from './components/AddImages';
import AddOffers from './components/AddOffers';
import AddPrice from './components/AddPrice';
import AddReview from './components/AddReview';
import AddComplete from './components/AddComplete';
import ShowData from './components/ShowData';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'signup',
        element: <SignUp />,
    },
    {
        path: 'signin',
        element: <SignIn />,
    },
    {
        path: 'add-property',
        element: <AddProperty />,
    },
    {
        path: 'add-property/add-about-your-place',
        element: <AddAboutYourPlace />,
    },
    {
        path: 'add-property/add-type',
        element: <AddType />,
    },
    {
        path: 'add-property/add-location/:type',
        element: <AddLocation />,
    },
    {
        path: 'add-property/add-title',
        element: <AddTitle />,
    },
    {
        path: 'add-property/add-details',
        element: <AddDetails />,
    },
    {
        path: 'add-property/add-images',
        element: <AddImages />,
    },
    {
        path: 'add-property/add-offers',
        element: <AddOffers />,
    },
    {
        path: 'add-property/add-price',
        element: <AddPrice />,
    },
    {
        path: 'add-property/review',
        element: <AddReview />,
    },
    {
        path: 'add-property/complete',
        element: <AddComplete />,
    },
    {
        path: 'showdata/:type',
        element: <ShowData />,
    },
];

export default AppRoutes;
