// * frontend/src/store/store.js

// Node Module Imports
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

const rootReducer = {

};

const createStore = (preloadedState) => configureStore({
    reducer: rootReducer,
    preloadedState,
    enhancers: [thunk]
});
export default createStore;