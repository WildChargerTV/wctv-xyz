// * frontend/src/store/store.js

// Node Module Imports
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
// Local Module Imports
import siteReducer from './site';

const rootReducer = {
    site: siteReducer
};

const createStore = (preloadedState) => configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: () => [thunk]
});
export default createStore;