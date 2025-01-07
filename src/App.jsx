// * frontend/src/App.jsx

// Node Module Imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Local Module Imports

/**
 * The primary purpose of the `Layout` component is to stall rendering (or re-rendering) the rest
 * of the webpage until `sessionActions.restoreUser()` has completed execution. To do this, a slice
 * of local state named `isLoaded` is utilized. 
 * 
 * Every time the page is loaded/reloaded, `isLoaded` is set to `false`, and is only set back to
 * `true` _after_ `restoreUser()` has completed execution. Inside the `return` statement, whether
 * or not the `Outlet` component renders - which will then render the child elements as defined by
 * the router - hinges on this state variable. **Other pages will feature similar intentional 
 * bottlenecks to ensure overall page loading remains as linear as possible.**
 * @component Layout
 * @returns {ReactElement}
 */
// function Layout() {
//     return <Outlet />
// }

/**
 * The route tree utilized by the `RouterProvider` to establish the locations of routes inside the
 * React app.
 * @type {Router}
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello from App</h1>
    }
]);

/**
 * The React App component. Effectively an abstraction layer that sits hierarchically between the
 * Redux Store Provider and the `Layout` component.
 * @component App
 * @requires {@linkcode router}
 * @returns {ReactElement.RouterProvider}
 */
const App = () => <RouterProvider router={router} />;
export default App;
