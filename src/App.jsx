// * frontend/src/App.jsx

// Node Module Imports
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
// Local Module Imports
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import BucketItem from './utils/BucketItem';

/**
 * Renders the greater structure of the webpage. Use this component to render elements that should
 * be visible on every route.
 * @component `Layout`
 * @requires {@linkcode Navigation} {@linkcode Footer}
 * @returns {ReactElement}
 */
function Layout() {
    return (<>
        <Navigation />
        <Outlet />
        <Footer />
    </>);
}

/**
 * The route tree utilized by the `RouterProvider` to establish the locations of routes inside the
 * React app.
 * @type {Router}
 */
const router = createHashRouter([
    {   
        path: '/',
        element: <Layout />,
        children: [
            /** Root - Landing Page */
            {
                path: '',
                element: <Landing />
            },
            /** Contact Page */
            {
                path: 'contact',
                element: <Contact />
            },
            /** Portfolio Page */
            {
                path: 'portfolio',
                element: <Portfolio />
            },
        ]
    },
    {
        /** File Pages (Bucket Access) */
        path: '/files/:fileName',
        element: <BucketItem />
    }
]);

/**
 * The React App component. Effectively an abstraction layer that sits hierarchically between the
 * Redux Store Provider and the `Layout` component.
 * @component `App`
 * @requires {@linkcode router}
 * @returns {ReactElement.RouterProvider}
 */
const App = () => <RouterProvider router={router} />;

/** Export the app. */
export default App;
