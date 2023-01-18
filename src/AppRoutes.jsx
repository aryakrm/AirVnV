import Home from './pages/Home';
import Test from './pages/Test';
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import AddProperty from "./pages/AddProperty";
// import AddAboutYourPlace from "./components/add_property/AddAboutYourPlace";
// import AddType from "./components/add_property/AddType";
// import AddLocation from "./components/add_property/AddLocation";
// import AddDetails from "./components/add_property/AddDetails";
// import AddTitle from "./components/add_property/AddTitle";
// import AddImages from "./components/add_property/AddImages";
// import AddOffers from "./components/add_property/AddOffers";
// import AddPrice from "./components/add_property/AddPrice";
// import AddReview from "./components/add_property/AddReview";
// import AddComplete from "./components/add_property/AddComplete";

const AppRoutes = [
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/',
        element: <Home />,
    },
    // {
    //   path: "signup",
    //   element: <SignUp />,
    // },
    // {
    //   path: "signin",
    //   element: <SignIn />,
    // },
    // {
    //   path: "add-property",
    //   element: <AddProperty />,
    // },
    // {
    //   path: "add-property/add-about-your-place",
    //   element: <AddAboutYourPlace />,
    // },
    // {
    //   path: "add-property/add-type",
    //   element: <AddType />,
    // },
    // {
    //   path: "add-property/add-location",
    //   element: <AddLocation />,
    // },
    // {
    //   path: "add-property/add-title",
    //   element: <AddTitle />,
    // },
    // {
    //   path: "add-property/add-details",
    //   element: <AddDetails />,
    // },
    // {
    //   path: "add-property/add-images",
    //   element: <AddImages />,
    // },
    // {
    //   path: "add-property/add-offers",
    //   element: <AddOffers />,
    // },
    // {
    //   path: "add-property/add-price",
    //   element: <AddPrice />,
    // },
    // {
    //   path: "add-property/review",
    //   element: <AddReview />,
    // },
    // {
    //   path: "add-property/complete",
    //   element: <AddComplete />,
    // },
];

export default AppRoutes;
