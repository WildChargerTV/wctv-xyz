// * src/store/site.js

//* --------------------[Thunk Action Identifiers]-------------------- *//
const SET_ACTIVE_TAB = 'site/setActiveTab';

//* --------------------[Thunk Action Creators]-------------------- *//
const setActiveTab = (tabId) => ({ type: SET_ACTIVE_TAB, payload: tabId });

//* --------------------[Thunk Middlewares]-------------------- *//
/**
 * Thunk middleware to update the active tab ID. Used on the Portfolio page.
 * @param {number} tabId 
 * @returns {(dispatch: function) => void}
 */
export const updateActiveTab = (tabId) => (dispatch) => {
    dispatch(setActiveTab(tabId));
};

//* --------------------[Initial State]-------------------- *//
/** The initial state for `site`. */
const initialState = {
    activeTab: 0
};

//* --------------------[Redux Reducer]-------------------- *//
/**
 * The thunk reducer for the `site` state, which manages and stores the current state of the site.
 * @param {initialState} [state=initialState]
 * @param {object} action
 * @returns {object}
 */
export default function siteReducer(state=initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        default:
            return state;
    }
}