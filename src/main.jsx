// * frontend/src/main.jsx

// Node Module Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Local Module Imports
import App from './App';
import createStore from './store/store';
import './index.css';

/** 
 * The Redux store, as assembled & configured by {@linkcode createStore}. Managed by the Provider
 * element supplied by `react-redux`.
 * @type {EnhancedStore}
 * @requires {@linkcode createStore}
 */
const store = createStore();

/** 
 * Render the React app. 
 * ? Note: `React.StrictMode` will render components twice in development, but not in production,
 * ? in order to detect any problems with your code and warn you about them.
 */
ReactDOM.createRoot(document.getElementById('root').render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
));