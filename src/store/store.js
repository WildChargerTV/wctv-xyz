// * src/store/store.js

// Node Module Imports
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
// Local Module Imports
import siteReducer from './site';

/** 
 * The primary Redux reducer & thunk controller. This connects all thunk actions to the Redux store
 * by passing itself into {@linkcode configureStore}.
 * @type {Reducer}
 */
const rootReducer = {
    site: siteReducer
};

/**
 * This method, when invoked, creates the Redux store using configuration defined in
 * `src/store/store.js`.
 * @requires {@linkcode rootReducer}
 * @param {any} preloadedState 
 * @returns {EnhancedStore}
 */
const createStore = (preloadedState) => configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: () => [thunk]
});

/** Export the Redux store. */
export default createStore;